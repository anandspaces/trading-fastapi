from pydantic import BaseModel
from datetime import date

class MutualFundBase(BaseModel):
    name: str
    investment_date: date
    amount_invested: float
    isin: str
    nav: float
    returns: float

class MutualFundResponse(MutualFundBase):
    id: int
    
    class Config:
        # orm_mode = True
        from_attributes = True
