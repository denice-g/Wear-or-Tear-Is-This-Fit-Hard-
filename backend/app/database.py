from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from supabase import create_client, Client
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.environ.get("SUPABASE_URL")  # Store in .env for safety
DATABASE_KEY = os.environ.get("SUPABASE_KEY")

supabase: Client = create_client(DATABASE_URL, DATABASE_KEY)

# engine = create_engine(DATABASE_URL)
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# Base = declarative_base()
