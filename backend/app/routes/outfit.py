from fastapi import APIRouter, UploadFile, File, Form
from app.services.ai_analysis import analyze_outfit

router = APIRouter(prefix="/outfit", tags=["Outfits"])

@router.get("/rateoutfit")
def say_hello():
    return {"message": "Hello, FastAPI router works!"}
