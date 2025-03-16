from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from supabase import create_client
from app.config import SUPABASE_URL, SUPABASE_KEY, DB_USER,DB_HOST,DB_NAME,DB_PASSWORD,TOKEN

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

# SQLALCHEMY_DATABASE_URL = f"postgresql+asyncpg://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"
# SQLALCHEMY_DATABASE_URL = f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"
# engine = create_engine(SQLALCHEMY_DATABASE_URL)

SUPABASE_DB_URL = f"postgresql://postgres:{TOKEN}@db.sfgxzznzsbvzmofoexax.supabase.co:5432/postgres"
engine = create_engine(SUPABASE_DB_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()