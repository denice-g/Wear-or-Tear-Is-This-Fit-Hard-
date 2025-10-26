from fastapi import APIRouter, UploadFile, File, Form
from app.services.ai_analysis import analyze_outfit
from app.services.supabase_service import upload_image, save_outfit_to_db, get_or_create_demo_user
from app.services.weather import get_weather
import pgeocode

router = APIRouter(prefix="/outfit", tags=["Outfits"])

@router.post("/rateoutfit")
async def outfit_advice(
    file: UploadFile = File(...),
    occasion: str = Form(...),
    dress_code: str = Form(...),
    zip_code: str = Form(...),
    preferences: str = Form(None),
):
    # Get or create demo user
    demo_user_id = get_or_create_demo_user()
    
    image_url = upload_image(file)

    #make a list of users preferences
    preferences_dict = {}
    if preferences:
        try:
            preferences_dict = json.loads(preferences)
        except json.JSONDecodeError:
            preferences_dict = {}

    #get lon and lat to determine weather
    nomi = pgeocode.Nominatim('us')
    location = nomi.query_postal_code(zip_code)

    #determine weather using weather api
    weather = await get_weather(location.latitude, location.longitude)

    ai_results = await analyze_outfit(image_url, occasion, weather, demo_user_id, preferences_dict)

    save_outfit_to_db(demo_user_id, image_url, occasion, weather, ai_results["feedback"])

    return {
        "image_url": image_url,
        "analysis": ai_results
    }