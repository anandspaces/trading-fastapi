from fastapi import APIRouter, Depends
from app.services.mutual_fund import get_all_funds
from app.schemas.mutual_fund import MutualFundResponse
from app.dependencies.database import get_db

router = APIRouter()

@router.get("/mutual-funds", response_model=list[MutualFundResponse])
def get_mutual_funds_overview(db=Depends(get_db)):
    return get_all_funds(db)