from sqlalchemy import Column, Integer, String, Numeric, ForeignKey
from app.database.session import Base

class SectorAllocation(Base):
    __tablename__ = "sector_allocations"
    
    fund_id = Column(Integer, ForeignKey("mutual_funds.id"), primary_key=True)
    sector = Column(String(255), primary_key=True)
    percentage = Column(Numeric(5, 2))

class StockAllocation(Base):
    __tablename__ = "stock_allocations"
    
    fund_id = Column(Integer, ForeignKey("mutual_funds.id"), primary_key=True)
    stock = Column(String(255), primary_key=True)
    percentage = Column(Numeric(5, 2))

class MarketCapAllocation(Base):
    __tablename__ = "market_cap_allocations"
    
    fund_id = Column(Integer, ForeignKey("mutual_funds.id"), primary_key=True)
    cap_type = Column(String(50), primary_key=True)
    percentage = Column(Numeric(5, 2))

class FundOverlap(Base):
    __tablename__ = "fund_overlaps"
    
    fund_a_id = Column(Integer, ForeignKey("mutual_funds.id"), primary_key=True)
    fund_b_id = Column(Integer, ForeignKey("mutual_funds.id"), primary_key=True)
    overlap_percentage = Column(Numeric(5, 2))