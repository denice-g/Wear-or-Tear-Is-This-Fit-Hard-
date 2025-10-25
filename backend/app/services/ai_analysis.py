import openai 
import base64
import os
from dotenv import load_dotenv
from app.services.supabase_service import upload_image, save_outfit_to_db

load_dotenv()
openai.api_key = os.getenv("OPEN_API_KEY")

async def analyze_outfit(image, occasion, weather, user_id):
    image_url = upload_image(image)

    img_bytes = await image.read()
    img_base64 = base64.b64encode(img_bytes).decode("utf-8")

    response = openai.chat.completion.create(
        model = "gpt-40",
        messages=[
            {"role": "system", "content": "You are a helpful fashion stylist"},
            {"role": "user", "content": [
                {"type": "text", "text": f"Analyze this outfit for a {occasion} in {weather} weather. Give important suggestions."},
                {"type": "image_url", "image_url": f"data:image/jpeg;base64,{img_base64}"}
            ]}
        ]
    )

    advice = response["choices"][0].message.content

    save_outfit_to_db(user_id, image_url, occasion, weather, feedback)

    return {"image_url": image_url, "feedback": advice}