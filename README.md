# AnanatNetra

AI-powered security recommendation system. Submit security findings and get intelligent analysis and remediation guidance via the Gemini API.

## Tech Stack

### Frontend
- **React 19** with Vite 6
- **Tailwind CSS 3** for styling
- **React Router** for client-side routing
- **React Hook Form** + **Joi** for form validation
- **Axios** for HTTP requests
- **Lucide React** for icons
- **react-hot-toast** for notifications

### Backend
- **Node.js** (>=18) + **Express 4**
- **Prisma 5** (ORM) + **MySQL**
- **Joi** for request validation
- **Google Gemini API** for AI analysis
- **Helmet**, **CORS**, **Morgan** (security & logging)

## Project Structure

```
AnanatNetra/
├── frontend/               # React SPA (Vite)
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Route pages
│   │   ├── services/       # API client
│   │   ├── utils/          # Helpers & constants
│   │   └── validations/    # Form schemas
│   ├── .env.example
│   └── package.json
│
├── backend/                # Express API
│   ├── src/
│   │   ├── config/         # App config & Prisma client
│   │   ├── controllers/    # Route handlers
│   │   ├── middlewares/     # Error handling, validation
│   │   ├── repositories/   # Database access layer
│   │   ├── routes/         # API route definitions
│   │   ├── services/       # Business logic & Gemini
│   │   ├── utils/          # Helpers & prompt templates
│   │   └── validations/    # Request schemas
│   ├── prisma/
│   │   ├── schema.prisma   # Database schema
│   │   └── migrations/     # Migration history
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **MySQL** database
- **Gemini API key** (get one from [Google AI Studio](https://aistudio.google.com/))

### 1. Clone & Install

```bash
git clone <repository-url>
cd AnanatNetra

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Configure Environment Variables

```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your MySQL connection string and Gemini API key

# Frontend
cp frontend/.env.example frontend/.env
# Edit frontend/.env if your API URL differs from the default
```

#### Backend Environment Variables

| Variable         | Description                        | Default                    |
|------------------|------------------------------------|----------------------------|
| `PORT`           | Server port                        | `5000`                     |
| `DATABASE_URL`   | MySQL connection string            | `mysql://root:@localhost:3306/ananatnetra` |
| `GEMINI_API_KEY` | Google Gemini API key              | —                          |

#### Frontend Environment Variables

| Variable       | Description              | Default                    |
|----------------|--------------------------|----------------------------|
| `VITE_API_URL` | Backend API base URL     | `http://localhost:5000`    |

### 3. Database Setup

The project uses Prisma for database management.

```bash
cd backend

# Run existing migrations
npm run prisma:migrate

# (Optional) Generate Prisma client if you modify the schema
npm run prisma:generate
```

### 4. Start Development Servers

```bash
# Terminal 1 — Backend (http://localhost:5000)
cd backend
npm run dev

# Terminal 2 — Frontend (http://localhost:5173)
cd frontend
npm run dev
```

## API Reference

All API responses follow a consistent format:

```json
{
  "success": true,
  "message": "Message",
  "data": {}
}
```

### POST `/api/v1/analyze`

Analyze a security finding.

**Request body:**

| Field          | Type   | Description                            |
|----------------|--------|----------------------------------------|
| `organization` | string | Organization name (e.g. "Healthcare")  |
| `asset`        | string | Asset name (e.g. "Patient Portal")     |
| `finding`      | string | Security finding description           |
| `severity`     | string | Severity level: `Low`, `Medium`, `High`, or `Critical` |

**Example:**

```bash
curl -X POST http://localhost:5000/api/v1/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "organization": "Healthcare",
    "asset": "Patient Portal",
    "finding": "Missing Security Headers",
    "severity": "High"
  }'
```

**Response:**

```json
{
  "success": true,
  "message": "Analysis completed successfully",
  "data": {
    "id": 1,
    "organization": "Healthcare",
    "asset": "Patient Portal",
    "finding": "Missing Security Headers",
    "severity": "High",
    "priority": "High",
    "why": "This can expose patient data and weaken browser-side protections.",
    "recommendation": "Add recommended security headers such as Content-Security-Policy, X-Frame-Options, and Strict-Transport-Security.",
    "timeline": "Fix within 7 days",
    "createdAt": "2026-06-27T00:00:00.000Z",
    "updatedAt": "2026-06-27T00:00:00.000Z"
  }
}
```

### GET `/api/v1/history`

Retrieve all past analyses (newest first).

**Example:**

```bash
curl http://localhost:5000/api/v1/history
```

**Response:**

```json
{
  "success": true,
  "message": "History retrieved successfully",
  "data": [ /* array of analysis objects */ ]
}
```

## Available Scripts

### Backend

| Script                | Description                          |
|-----------------------|--------------------------------------|
| `npm run dev`         | Start dev server with hot reload     |
| `npm start`           | Start production server              |
| `npm run prisma:generate` | Regenerate Prisma client         |
| `npm run prisma:migrate`  | Run development migrations       |
| `npm run prisma:deploy`   | Run production migrations        |

### Frontend

| Script            | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Start Vite dev server              |
| `npm run build`   | Build for production               |
| `npm run preview` | Preview production build           |
| `npm run lint`    | Run ESLint                         |

## Tech Decisions & Architecture

- **`asyncHandler`** wraps async route handlers so repetitive `try-catch` blocks are avoided — errors propagate to the centralized error handler middleware.
- **Repository pattern** separates database access from business logic (services).
- **Joi validation** on both layers: backend validates incoming requests; frontend validates form input before submission.
- **Prisma migrations** are checked into version control as the source of truth for the database schema.
- **Gemini API** generates `priority`, `why`, `recommendation`, and `timeline` fields based on the finding details.