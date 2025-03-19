from sqlalchemy.orm import Session
from datetime import date
from app.database.session import SessionLocal, engine, Base
from backend.app.models.mutual_funds import MutualFund
from app.models.allocations import (
    SectorAllocation,
    StockAllocation,
    MarketCapAllocation,
    FundOverlap
)

# Initialize the database tables
Base.metadata.create_all(bind=engine)

# Sample Data
mutual_funds_data = [
    {
        "name": "ICICI Prudential Bluechip Fund",
        "investment_date": date(2023, 1, 10),
        "amount_invested": 1000000,
        "isin": "INF109K016L0",
        "nav": 100,
        "returns": 12.5,
    },
    {
        "name": "HDFC Top 100 Fund",
        "investment_date": date(2022, 12, 5),
        "amount_invested": 800000,
        "isin": "INF179K01YV8",
        "nav": 100,
        "returns": 10.2,
    },
    {
        "name": "SBI Bluechip Fund",
        "investment_date": date(2023, 2, 15),
        "amount_invested": 1200000,
        "isin": "INF200K01QX4",
        "nav": 100,
        "returns": 11.0,
    },
    {
        "name": "Axis Bluechip Fund",
        "investment_date": date(2022, 11, 20),
        "amount_invested": 950000,
        "isin": "INF846K01DP8",
        "nav": 100,
        "returns": 9.8,
    },
    {
        "name": "Mirae Asset Large Cap Fund",
        "investment_date": date(2023, 3, 1),
        "amount_invested": 1100000,
        "isin": "INF769K01AX2",
        "nav": 100,
        "returns": 13.0,
    },
]

allocations_data = {
    "ICICI Prudential Bluechip Fund": {
        "sectors": [
            {"sector": "IT", "percentage": 38},
            {"sector": "Financials", "percentage": 37},
            {"sector": "Energy/Conglomerate", "percentage": 25}
        ],
        "stocks": [
            {"stock": "Reliance Industries", "percentage": 25},
            {"stock": "HDFC Bank", "percentage": 22},
            {"stock": "TCS", "percentage": 20},
            {"stock": "Infosys", "percentage": 18},
            {"stock": "ICICI Bank", "percentage": 15}
        ],
        "market_caps": [
            {"cap_type": "Large Cap", "percentage": 98},
            {"cap_type": "Mid Cap", "percentage": 2},
            {"cap_type": "Small Cap", "percentage": 0}
        ]
    },
    "HDFC Top 100 Fund": {
        "sectors": [
            {"sector": "Financials", "percentage": 80},
            {"sector": "Energy/Conglomerate", "percentage": 20}
        ],
        "stocks": [
            {"stock": "HDFC Bank", "percentage": 28},
            {"stock": "ICICI Bank", "percentage": 24},
            {"stock": "Reliance Industries", "percentage": 20},
            {"stock": "Kotak Mahindra Bank", "percentage": 18},
            {"stock": "Bajaj Finance", "percentage": 10}
        ],
        "market_caps": [
            {"cap_type": "Large Cap", "percentage": 85},
            {"cap_type": "Mid Cap", "percentage": 13},
            {"cap_type": "Small Cap", "percentage": 2}
        ]
    },
    "SBI Bluechip Fund": {
        "sectors": [
            {"sector": "Energy/Conglomerate", "percentage": 27},
            {"sector": "IT", "percentage": 40},
            {"sector": "Financials", "percentage": 21},
            {"sector": "Industrials", "percentage": 12}
        ],
        "stocks": [
            {"stock": "Reliance Industries", "percentage": 27},
            {"stock": "TCS", "percentage": 23},
            {"stock": "HDFC Bank", "percentage": 21},
            {"stock": "Infosys", "percentage": 17},
            {"stock": "Larsen & Toubro", "percentage": 12}
        ],
        "market_caps": [
            {"cap_type": "Large Cap", "percentage": 97},
            {"cap_type": "Mid Cap", "percentage": 3},
            {"cap_type": "Small Cap", "percentage": 0}
        ]
    },
    "Axis Bluechip Fund": {
        "sectors": [
            {"sector": "IT", "percentage": 50},
            {"sector": "Financials", "percentage": 32},
            {"sector": "Energy/Conglomerate", "percentage": 18}
        ],
        "stocks": [
            {"stock": "TCS", "percentage": 26},
            {"stock": "Infosys", "percentage": 24},
            {"stock": "HDFC Bank", "percentage": 22},
            {"stock": "Reliance Industries", "percentage": 18},
            {"stock": "State Bank of India (SBI)", "percentage": 10}
        ],
        "market_caps": [
            {"cap_type": "Large Cap", "percentage": 98},
            {"cap_type": "Mid Cap", "percentage": 2},
            {"cap_type": "Small Cap", "percentage": 0}
        ]
    },
    "Mirae Asset Large Cap Fund": {
        "sectors": [
            {"sector": "IT", "percentage": 42},
            {"sector": "Financials", "percentage": 34},
            {"sector": "Energy/Conglomerate", "percentage": 24}
        ],
        "stocks": [
            {"stock": "Reliance Industries", "percentage": 24},
            {"stock": "HDFC Bank", "percentage": 23},
            {"stock": "TCS", "percentage": 22},
            {"stock": "Infosys", "percentage": 20},
            {"stock": "ICICI Bank", "percentage": 11}
        ],
        "market_caps": [
            {"cap_type": "Large Cap", "percentage": 96},
            {"cap_type": "Mid Cap", "percentage": 4},
            {"cap_type": "Small Cap", "percentage": 0}
        ]
    }
}

overlaps_data = [
    ("ICICI Prudential Bluechip Fund", "HDFC Top 100 Fund", 67),
    ("ICICI Prudential Bluechip Fund", "SBI Bluechip Fund", 87),
    ("ICICI Prudential Bluechip Fund", "Axis Bluechip Fund", 88),
    ("ICICI Prudential Bluechip Fund", "Mirae Asset Large Cap Fund", 100),
    ("HDFC Top 100 Fund", "SBI Bluechip Fund", 48),
    ("HDFC Top 100 Fund", "Axis Bluechip Fund", 44),
    ("HDFC Top 100 Fund", "Mirae Asset Large Cap Fund", 65),
    ("SBI Bluechip Fund", "Axis Bluechip Fund", 89),
    ("SBI Bluechip Fund", "Mirae Asset Large Cap Fund", 89),
    ("Axis Bluechip Fund", "Mirae Asset Large Cap Fund", 90)
]

def seed_data():
    session = SessionLocal()
    try:
        # Clear existing data in proper order
        session.query(FundOverlap).delete()
        session.query(MarketCapAllocation).delete()
        session.query(StockAllocation).delete()
        session.query(SectorAllocation).delete()
        session.query(MutualFund).delete()
        session.commit()

        # Insert Mutual Funds
        funds = {}
        for data in mutual_funds_data:
            fund = MutualFund(**data)
            session.add(fund)
            session.commit()
            session.refresh(fund)
            funds[fund.name] = fund.id

        # Insert Allocations using bulk operations
        for fund_name, allocations in allocations_data.items():
            fund_id = funds.get(fund_name)
            if not fund_id:
                continue

            # Prepare bulk insert data
            sectors = [{"fund_id": fund_id, **s} for s in allocations["sectors"]]
            stocks = [{"fund_id": fund_id, **s} for s in allocations["stocks"]]
            market_caps = [{"fund_id": fund_id, **c} for c in allocations["market_caps"]]

            # Bulk insert
            session.bulk_insert_mappings(SectorAllocation, sectors)
            session.bulk_insert_mappings(StockAllocation, stocks)
            session.bulk_insert_mappings(MarketCapAllocation, market_caps)

        # Insert Overlaps
        overlaps = []
        for fund_a, fund_b, overlap in overlaps_data:
            fund_a_id = funds.get(fund_a)
            fund_b_id = funds.get(fund_b)
            if fund_a_id and fund_b_id:
                overlaps.append({
                    "fund_a_id": fund_a_id,
                    "fund_b_id": fund_b_id,
                    "overlap_percentage": overlap
                })

        session.bulk_insert_mappings(FundOverlap, overlaps)
        session.commit()
        print("✅ Database seeded successfully!")

    except Exception as e:
        session.rollback()
        print(f"❌ Error seeding database: {str(e)}")
        raise
    finally:
        session.close()

if __name__ == "__main__":
    seed_data()