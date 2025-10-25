from supabase import create_client
import os
import uuid
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

print("DEBUG: SUPABASE_URL =", SUPABASE_URL)

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("Missing Supabase environment variables.")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

def upload_image(file):
    content = file.file.read()
    path = f"outfits/{file.filename}"

    supabase.storage.from_("outift-images").upload(path, content)
    image_url = f"{SUPABASE_URL}/storage/v1/object/public/outift-images/{path}"
    return f"{SUPABASE_URL}/storage/v1/object/public/outift-images/{path}"

def save_outfit_to_db(user_id, image_url, occasion, weather, feedback):
    supabase.table("outfits").insert({
        #"user_id": user_id,
        "image_url": image_url,
        "occasion": occasion,
        "weather": weather,
        "ai_feedback": feedback
    }).execute()