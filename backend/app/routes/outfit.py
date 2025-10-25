from fastapi import APIRouter, UploadFile, File, Form
from app.services.ai_analysis import analyze_outfit
from app.services.supabase_service import upload_image, save_outfit_to_db, get_or_create_demo_user

router = APIRouter(prefix="/outfit", tags=["Outfits"])

@router.post("/rateoutfit")
async def outfit_advice(
    file: UploadFile = File(...),
    occasion: str = Form(...),
    dress_code: str = Form(...),
    weather: str = Form(...),
    preferences: str = Form(None),
):
    # Get or create demo user
    demo_user_id = get_or_create_demo_user()
    
    image_url = upload_image(file)

    ai_results = await analyze_outfit(image_url, occasion, weather, demo_user_id)

    save_outfit_to_db(demo_user_id, image_url, occasion, weather, ai_results["feedback"])

    return {
        "image_url": image_url,
        "analysis": ai_results
    }