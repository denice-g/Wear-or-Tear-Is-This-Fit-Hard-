from fastapi import APIRouter, UploadFile, File, Form
from app.services.ai_analysis import analyze_outfit
from app.services.supabase_service import upload_image, save_outfit_to_db

router = APIRouter(prefix="/outfit", tags=["Outfits"])

@router.post("/rateoutfit")
def outfit_advice(
    file: UploadFile = File(...),
    occasion: str = Form(...),
    dress_code: str = Form(...),
    weather: str = Form(...),
    preferences: str = Form(None)

):
    
    image_url = upload_image(file)

    ai_results = analyze_outfit(image_url, occasion, weather, id)

    save_outfit_to_db(id, image_url, occasion, weather, ai_results)

    return {
        "image_url": image_url,
        "analysis": ai_results
    }
