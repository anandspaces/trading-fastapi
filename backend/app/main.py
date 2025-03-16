from fastapi import FastAPI, HTTPException
from app.routers import overview, allocations, overlaps
from app.utils.exceptions import http_exception_handler
from fastapi.middleware.cors import CORSMiddleware

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
app.include_router(overview.router, prefix="/api")
app.include_router(allocations.router, prefix="/api")
app.include_router(overlaps.router, prefix="/api")

# Exception handling
app.add_exception_handler(HTTPException, http_exception_handler)

@app.get("/")
def read_root():
    return {"status": "OK"}