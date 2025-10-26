import os
import httpx
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.environ.get("WEATHER_KEY")
BASE_URL = "http://api.weatherapi.com/v1/current.json"

async def get_weather(lat: float, lon: float) -> dict:
    params = {
        "key": API_KEY,
        "q": f"{lat},{lon}"
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(BASE_URL, params=params)
        response.raise_for_status()  # raises exception on error
        data = response.json()
        return {
            "temperature": data["current"]["temp_c"],      # Celsius
            "condition": data["current"]["condition"]["text"],  # e.g., "Sunny"
            "humidity": data["current"]["humidity"],
            "wind_kph": data["current"]["wind_kph"]
        }

