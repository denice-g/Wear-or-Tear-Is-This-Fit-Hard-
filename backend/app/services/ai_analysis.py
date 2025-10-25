import openai 
import base64
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

async def analyze_outfit(image_url: str, occasion: str, weather: str, user_id: str):

    import requests
    img_bytes = requests.get(image_url).content
    img_base64 = base64.b64encode(img_bytes).decode("utf-8")

    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful fashion stylist"},
            {"role": "user", "content": [
                {"type": "text", "text": f"Analyze this outfit for a {occasion} in {weather} weather. Give important suggestions."},
                {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{img_base64}"}}
            ]}
        ]
    )

    advice = response.choices[0].message.content

    return {"image_url": image_url, "feedback": advice}