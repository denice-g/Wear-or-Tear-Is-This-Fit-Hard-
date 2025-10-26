import openai 
import base64
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

async def analyze_outfit(image_url: str, occasion: str, weather: dict, user_id: str, preferences: dict = None):

    import requests
    img_bytes = requests.get(image_url).content
    img_base64 = base64.b64encode(img_bytes).decode("utf-8")

    preferences_text = ""
    if preferences:
        pref_list = []

        if preferences.get("colors"):
            colors = ", ".join(preferences["colors"])
            pref_list.append(f"preferred colors: {colors}")

        if preferences.get("fit"):
            pref_list.append(f"preferred fit: {preferences['fit']}")

        if preferences.get("style"):
            pref_list.append(f"style preferences: {preferences['style']}")

        for key, value in preferences.items():
            if key not in ["colors", "fit", "style"]:
                if isinstance(value, list):
                    pref_list.append(f"{key}: {', '.join(value)}")
                else:
                    pref_list.append(f"{key}: {value}")

        if pref_list:
            preferences_text = f"\n\nUser preferences: {'; '.join(pref_list)}"

    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful fashion stylist"},
            {"role": "user", "content": [
                {"type": "text", "text": f"Analyze this outfit for a {occasion} in {weather} weather. Give important suggestions taking into consideration these preferences {preferences}."},
                {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{img_base64}"}}
            ]}
        ]
    )

    advice = response.choices[0].message.content

    return {"image_url": image_url, "feedback": advice}