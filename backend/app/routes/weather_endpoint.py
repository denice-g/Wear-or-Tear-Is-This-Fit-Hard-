from fastapi import APIRouter
from app.weather import get_weather

router = APIRouter()

@router.get("/weather")
async def weather(lat: float, lon: float):
    try:
        data = await get_weather(lat, lon)
        return data
    except Exception as e:
        return {"error": str(e)}
