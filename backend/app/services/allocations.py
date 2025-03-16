from sqlalchemy.orm import Session
from app.models import (
    SectorAllocation,
    StockAllocation,
    MarketCapAllocation,
    FundOverlap,
    MutualFund
)

async def get_fund_allocations(db: Session, fund_id: int):
    sectors = db.query(SectorAllocation).filter_by(fund_id=fund_id).all()
    stocks = db.query(StockAllocation).filter_by(fund_id=fund_id).all()
    market_caps = db.query(MarketCapAllocation).filter_by(fund_id=fund_id).all()
    
    return {
        "sectors": sectors,
        "stocks": stocks,
        "market_caps": market_caps
    }

async def get_all_overlaps(db: Session):
    return db.query(
        MutualFund.name.label("fund_a"),
        MutualFund.name.label("fund_b"),
        FundOverlap.overlap_percentage
    ).join(
        FundOverlap, MutualFund.id == FundOverlap.fund_a_id
    ).join(
        MutualFund, FundOverlap.fund_b_id == MutualFund.id
    ).all()