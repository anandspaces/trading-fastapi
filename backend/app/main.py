from fastapi import FastAPI
from app.routers import mutual_funds, allocations, overlaps
from fastapi.middleware.cors import CORSMiddleware
from app.database.session import engine, Base

# Create tables first
Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(mutual_funds.router, prefix="/api")
app.include_router(allocations.router, prefix="/api")
app.include_router(overlaps.router, prefix="/api")

@app.get("/")
def read_root():
    return {"status": "OK"}