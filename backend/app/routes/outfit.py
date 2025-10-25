from fastapi import APIRouter, UploadFile, File, Form
from app.services.ai_analysis import analyze_outfit

router = APIRouter(prefix="/outfit", tags=["Outfits"])

@router.get("/rateoutfit")
async def analyze_outfit_endpoint(
    image: UploadFile = File(...),
    occasion: str = Form(...),
    weather: str = Form(...),
    user_id: str = Form(...)
):
    result = await analyze_outfit(image, occasion, weather, user_id)
    return result
