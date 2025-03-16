# Full Stack Dashboard

## 🚀 Project Overview
This is a **Full Stack Dashboard** built using **FastAPI** for the backend and **React (Vite)** for the frontend. The application provides an **investment overview, mutual fund allocation details, and overlap analysis dashboard** with interactive charts and authentication.

## 🛠️ Tech Stack

### Frontend:
- React 19 (Vite)
- Tailwind CSS
- Recharts (for data visualization)
- React Query (for state management & data fetching)
- React Router DOM (for routing)

### Backend:
- FastAPI (Python)
- PostgreSQL (Supabase)
- SQLAlchemy
- AsyncPG (for async database interactions)
- Supabase Python SDK (for authentication and storage)

### Deployment:
- Frontend: Vercel / Netlify
- Backend: Render / Railway / AWS
- **Docker Support**: Containerized frontend and backend using Docker and Docker Compose

## 📂 Project Structure

```
trading-dashboard/
│── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── routes/
│   │   │   ├── auth.py
│   │   │   ├── dashboard.py
│   │   ├── schemas.py
│   │   ├── services.py
│   │   ├── config.py
│   ├── Dockerfile
│   ├── .env
│   ├── requirements.txt
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   ├── Dockerfile
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   ├── package.json
│── docker-compose.yml
│── README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Backend Setup

#### Prerequisites:
- Python 3.9+
- PostgreSQL (Supabase account)
- FastAPI & Dependencies

#### Steps:
```bash
# Clone the repository
git clone https://github.com/anandspaces/trading-fastapi.git
cd trading-fastapi/backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env  # Add Supabase credentials

# Run the FastAPI server
uvicorn app.main:app --reload
```

### 2️⃣ Frontend Setup

#### Prerequisites:
- Node.js 18+

#### Steps:
```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🐳 Running with Docker
This project includes **Docker support** for easy deployment and local development.

### 1️⃣ Running Backend with Docker
```bash
cd backend
# Build and run the backend container
docker build -t dashboard-backend .
docker run -p 8000:8000 --env-file .env dashboard-backend
```

### 2️⃣ Running Frontend with Docker
```bash
cd frontend
# Build and run the frontend container
docker build -t dashboard-frontend .
docker run -p 3000:3000 dashboard-frontend
```

### 3️⃣ Running with Docker Compose
To start both frontend and backend containers together:
```bash
docker-compose up --build
```
This will spin up both services and link them automatically.

## 🔑 Authentication
The project uses **Supabase Auth** for authentication. Users can sign up, log in, and access protected routes based on their roles.

## 📊 Features
- **User Authentication:** Sign up, log in, and secure API routes.
- **Investment Dashboard:** Overview of portfolio performance.
- **Mutual Fund Allocation:** Breakdown of fund allocations.
- **Overlap Analysis:** Analyze overlapping investments.
- **Interactive Charts:** Visual representation using Recharts.
- **PostgreSQL Database:** Optimized queries for faster data retrieval.
- **Error Handling & Logging:** Improved debugging and monitoring.
- **Docker Support:** Containerized development and deployment.

## 📌 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/auth/signup` | Register a new user |
| POST   | `/auth/login` | User login |
| GET    | `/dashboard/overview` | Fetch investment summary |
| GET    | `/dashboard/mutual-funds` | Get mutual fund details |
| GET    | `/dashboard/overlap` | Retrieve overlap analysis |

## 🎯 Future Improvements
- Add **strategy comparison feature**
- Enhance **performance optimizations**
- Implement **AI-based investment suggestions**

## 📝 License
This project is licensed under the **MIT License**.

---
### 💬 Need Help?
If you encounter any issues, feel free to open an issue or reach out.

