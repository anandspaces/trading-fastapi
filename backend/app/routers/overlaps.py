from fastapi import APIRouter, Depends
from app.services.allocations import get_all_overlaps
from app.schemas.allocations import OverlapResponse
from app.dependencies.database import get_db

router = APIRouter()

@router.get("/overlaps", response_model=list[OverlapResponse])
def get_overlaps(db=Depends(get_db)):
    return get_all_overlaps(db)