from pydantic import BaseModel
from typing import List

class SectorAllocation(BaseModel):
    sector: str
    percentage: float

class StockAllocation(BaseModel):
    stock: str
    percentage: float

class MarketCapAllocation(BaseModel):
    cap_type: str
    percentage: float

class AllocationResponse(BaseModel):
    sectors: List[SectorAllocation]
    stocks: List[StockAllocation]
    market_caps: List[MarketCapAllocation]

class OverlapResponse(BaseModel):
    fund_a: str
    fund_b: str
    overlap: float

    class Config:
        # orm_mode = True
        from_attributes = True
