from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from passlib.context import CryptContext
from app.database import supabase
import hashlib

router = APIRouter()
pwd_context = CryptContext(schemes=["argon2"], deprecated="auto")

class UserRegistration(BaseModel):
    firstName : str
    lastName : str
    email : str
    username : str
    password : str

class UserLogin(BaseModel):
    username : str
    password : str


def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain_pw, hashed_pw):
    return pwd_context.verify(plain_pw, hashed_pw)

@router.post("/login")
def user_login(user: UserLogin):
    result = supabase.table("users").select("*").eq("username", user.username).execute()
    if not result.data:
        raise HTTPException(status_code=401, detail="Invalid Credentials")
    
    user_data = result.data[0]
    if not verify_password(user.password, user_data["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    return {"message": "Login Successful"}

@router.post("/register")
def user_register(user: UserRegistration):
    existing = supabase.table("users").select("username").eq("username", user.username).execute()
    if existing.data:
        raise HTTPException(status_code=400, detail="User Already Exists")
    
    hashed_pw = hash_password(user.password)
    supabase.table("users").insert({
        "firstname" : user.firstName,
        "lastname" : user.lastName,
        "email" : user.email,
        "username": user.username,
        "password": hashed_pw
    }).execute()

    return {"message": "User Registered Successfully"}