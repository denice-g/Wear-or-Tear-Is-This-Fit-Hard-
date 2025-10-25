from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

SUPABASE_URL = os.getenv("SUPABASE_URL")  # Store in .env for safety

engine = create_engine(SUPABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
