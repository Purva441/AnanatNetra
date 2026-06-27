# AnanatNetra Backend

Backend API for analyzing security findings with Gemini AI and saving every result in MySQL.

## Tech Stack

- Node.js
- Express.js
- Prisma ORM
- MySQL
- Joi validation
- Gemini API

## Folder Structure

```text
src/
  config/
  constants/
  controllers/
  middlewares/
  repositories/
  routes/
  services/
  utils/
  validations/
prisma/
  migrations/
  schema.prisma
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` from `.env.example` and update the values:

```bash
cp .env.example .env
```

3. Run Prisma migration:

```bash
npm run prisma:migrate
```

4. Start the server:

```bash
npm run dev
```

## Environment Variables

| Variable | Description |
| --- | --- |
| `PORT` | Server port |
| `DATABASE_URL` | MySQL connection string |
| `GEMINI_API_KEY` | Gemini API key |

## APIs

### POST `/api/v1/analyze`

Request body:

```json
{
  "organization": "Healthcare",
  "asset": "Patient Portal",
  "finding": "Missing Security Headers",
  "severity": "High"
}
```

Success response:

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

Returns all saved analyses, newest first.

## Notes

- All API responses follow this format:

```json
{
  "success": true,
  "message": "Message",
  "data": {}
}
```

- Centralized error handling is available in `src/middlewares/errorHandler.js`.
- Repetitive `try-catch` blocks are avoided with `src/utils/asyncHandler.js`.
