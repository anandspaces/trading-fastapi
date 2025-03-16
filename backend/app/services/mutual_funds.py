from sqlalchemy.orm import Session
from app.models.mutual_fund import MutualFund

def get_all_funds(db: Session):
    return db.query(MutualFund).all()