from fastapi import APIRouter, Depends, HTTPException
from app.services.allocations import get_fund_allocations
from app.schemas.allocations import AllocationResponse
from app.dependencies.database import get_db

router = APIRouter()

@router.get("/allocations/{fund_id}", response_model=AllocationResponse)
def get_allocations(fund_id: int, db=Depends(get_db)):
    allocations = get_fund_allocations(db, fund_id)
    if not allocations:
        raise HTTPException(status_code=404, detail="Fund not found")
    return allocations