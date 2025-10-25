from fastapi import APIRouter

router = APIRouter()

@router.get("/rateoutfit")
def say_hello():
    return {"message": "Hello, FastAPI router works!"}
