# from sqlalchemy import Column, Integer, String, Date, Numeric
# from app.database.session import Base

# class MutualFund(Base):
#     __tablename__ = "mutual_funds"
#     __table_args__ = {'extend_existing': True}
    
#     id = Column(Integer, primary_key=True, index=True)
#     name = Column(String(255), unique=True, index=True)
#     investment_date = Column(Date)
#     amount_invested = Column(Numeric(12, 2))
#     isin = Column(String(255), unique=True)
#     nav = Column(Numeric(10, 2))
#     returns = Column(Numeric(5, 2))

from sqlalchemy import Column, Integer, String, Date, Numeric, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base

class MutualFund(Base):
    __tablename__ = "mutual_funds"
    __table_args__ = {'extend_existing': True}
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), unique=True, index=True, nullable=False)
    investment_date = Column(Date, nullable=False)
    amount_invested = Column(Numeric(12, 2), nullable=False)
    isin = Column(String(255), unique=True, nullable=False)
    nav = Column(Numeric(10, 2), nullable=False)
    returns = Column(Numeric(5, 2), nullable=False)

    # Relationships
    sector_allocations = relationship("SectorAllocation", back_populates="mutual_fund", cascade="all, delete-orphan")
    stock_allocations = relationship("StockAllocation", back_populates="mutual_fund", cascade="all, delete-orphan")
    market_cap_allocations = relationship("MarketCapAllocation", back_populates="mutual_fund", cascade="all, delete-orphan")
    fund_overlaps_a = relationship("FundOverlap", foreign_keys="[FundOverlap.fund_a_id]", back_populates="fund_a", cascade="all, delete-orphan")
    fund_overlaps_b = relationship("FundOverlap", foreign_keys="[FundOverlap.fund_b_id]", back_populates="fund_b", cascade="all, delete-orphan")

