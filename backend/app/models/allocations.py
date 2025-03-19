from sqlalchemy import Column, Integer, String, Date, Numeric, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base

class SectorAllocation(Base):
    __tablename__ = "sector_allocations"
    __table_args__ = {'extend_existing': True}
    
    fund_id = Column(Integer, ForeignKey("mutual_funds.id"), primary_key=True)
    sector = Column(String(255), primary_key=True)
    percentage = Column(Numeric(5, 2), nullable=False)

    mutual_fund = relationship("MutualFund", back_populates="sector_allocations")

class StockAllocation(Base):
    __tablename__ = "stock_allocations"
    __table_args__ = {'extend_existing': True}
    
    fund_id = Column(Integer, ForeignKey("mutual_funds.id"), primary_key=True)
    stock = Column(String(255), primary_key=True)
    percentage = Column(Numeric(5, 2), nullable=False)

    mutual_fund = relationship("MutualFund", back_populates="stock_allocations")

class MarketCapAllocation(Base):
    __tablename__ = "market_cap_allocations"
    __table_args__ = {'extend_existing': True}
    
    fund_id = Column(Integer, ForeignKey("mutual_funds.id"), primary_key=True)
    cap_type = Column(String(50), primary_key=True)
    percentage = Column(Numeric(5, 2), nullable=False)

    mutual_fund = relationship("MutualFund", back_populates="market_cap_allocations")

class FundOverlap(Base):
    __tablename__ = "fund_overlaps"
    __table_args__ = {'extend_existing': True}

    fund_a_id = Column(Integer, ForeignKey("mutual_funds.id"), primary_key=True)
    fund_b_id = Column(Integer, ForeignKey("mutual_funds.id"), primary_key=True)
    overlap_percentage = Column(Numeric(5, 2), nullable=False)

    fund_a = relationship("MutualFund", foreign_keys=[fund_a_id], back_populates="fund_overlaps_a")
    fund_b = relationship("MutualFund", foreign_keys=[fund_b_id], back_populates="fund_overlaps_b")
