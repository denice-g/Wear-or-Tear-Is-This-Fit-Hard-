from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import outfit
from app.routes import users
import logging

logging.basicConfig(level=logging.DEBUG)
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # adjust for your frontend
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all routers from the routes folder
app.include_router(outfit.router)
app.include_router(users.router)