from sqlalchemy import Column, Integer, String, Date, Numeric
from app.database.session import Base

class MutualFund(Base):
    __tablename__ = "mutual_funds"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), unique=True, index=True)
    investment_date = Column(Date)
    amount_invested = Column(Numeric(12, 2))
    isn = Column(String(255), unique=True)
    nav = Column(Numeric(10, 2))
    returns = Column(Numeric(5, 2))