from supabase import create_client
import os
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("Missing Supabase environment variables.")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

def get_or_create_demo_user():
    """Get or create a demo user for testing"""
    # Use a fixed UUID for demo user
    demo_user_id = "00000000-0000-0000-0000-000000000001"
    
    try:
        # Check if demo user exists
        response = supabase.table("users").select("*").eq("id", demo_user_id).execute()
        
        # If not, create it
        if not response.data:
            supabase.table("users").insert({
                "id": demo_user_id,
                "firstname": "Demo",
                "lastname": "User",
                "email": "demo@example.com",
                "password": "demo_password_hash",  # In production, this should be properly hashed
                "username": "demo_user"
            }).execute()
            print(f"Created demo user with ID: {demo_user_id}")
        
        return demo_user_id
    except Exception as e:
        print(f"Error in get_or_create_demo_user: {e}")
        raise

def upload_image(file):
    content = file.file.read()
    path = f"outfits/{file.filename}"

    supabase.storage.from_("outift-images").upload(path, content)
    return f"{SUPABASE_URL}/storage/v1/object/public/outift-images/{path}"

def save_outfit_to_db(user_id, image_url, occasion, weather, feedback):
    response = supabase.table("outfits").insert({
        "user_id": user_id,
        "image_url": image_url,
        "occasion": occasion,
        "weather": weather,
        "ai_feedback": feedback
    }).execute()

    return response