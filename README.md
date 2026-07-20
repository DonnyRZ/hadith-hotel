# Hadith Hotel — Company Profile

Luxury company profile site for HADITH Hotel (Complex of Imam Al Bukhari, Samarkand).

## Stack

- **Frontend:** Next.js (App Router) + TypeScript + Tailwind — in `web/`
- **Database:** PostgreSQL 16 (Docker)
- **ORM:** Prisma 6 (ready for later use; pages still use PDF copy)

## Quick start

### 1. Start PostgreSQL

```bash
docker compose up -d db
```

### 2. App setup

```bash
cd web
cp .env.example .env
npm install
npm run db:generate
npm run db:migrate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Full stack with Docker

```bash
docker compose up --build
```

- Web: http://localhost:3000  
- Postgres: `localhost:5432` (user/pass/db: `hadith` / `hadith` / `hadith_hotel`)

## Project layout

```
Hadith-Hotel/
├── Assets/                 # Hotel imagery (grouped by facility)
├── Design-Reference/       # Cheval Blanc, COMO, Rosewood
├── docker-compose.yml
├── web/                    # Next.js app
│   ├── prisma/
│   ├── src/
│   └── Dockerfile
└── HADITH HOTEL PROFILE PRESENTATION 09.07.2026.pdf
```

## Pages (planned)

| Route | Purpose |
|-------|---------|
| `/` | Home |
| `/the-hotel` | Our Story |
| `/rooms` | Rooms & Suites |
| `/dining` | Dining |
| `/wellness` | Wellness |
| `/experiences` | Experiences |

Contact lives in the footer only (no booking in v1).
