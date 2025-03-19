from sqlalchemy.orm import Session, aliased
from app.models.allocations import (
    SectorAllocation,
    StockAllocation,
    MarketCapAllocation,
    FundOverlap,
)
from app.models.mutual_funds import MutualFund

def get_fund_allocations(db: Session, fund_id: int):
    sectors = db.query(SectorAllocation).filter_by(fund_id=fund_id).all()
    stocks = db.query(StockAllocation).filter_by(fund_id=fund_id).all()
    market_caps = db.query(MarketCapAllocation).filter_by(fund_id=fund_id).all()
    
    return {
        "sectors": sectors,
        "stocks": stocks,
        "market_caps": market_caps
    }

def get_all_overlaps(db: Session):
    FundA = aliased(MutualFund, name="fund_a")
    FundB = aliased(MutualFund, name="fund_b")
    
    return db.query(
        FundA.name.label("fund_a"),
        FundB.name.label("fund_b"),
        FundOverlap.overlap_percentage.label("overlap")
    ).join(
        FundA, FundOverlap.fund_a_id == FundA.id
    ).join(
        FundB, FundOverlap.fund_b_id == FundB.id
    ).all()