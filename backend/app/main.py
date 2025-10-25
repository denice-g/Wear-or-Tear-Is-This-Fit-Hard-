from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import outfit

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # adjust for your frontend
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all routers from the routes folder
app.include_router(outfit.router)
