# admin-fe

Admin console for Custom Hampers (Eliva). Vite + React + TypeScript.

## Routes

| Path | Access | Purpose |
| --- | --- | --- |
| `/login` | public | Sign in; admits only users whose API role includes `admin` |
| `/` | admin | Operations dashboard scaffold |

There is no demo admin login. Role checks here must match the backend `admin` role.

## Start

```bash
cd front-end/admin-fe
copy .env.example .env
npm install
npm run dev
```

Opens at http://localhost:5174

Set `VITE_API_URL` to the NestJS origin (default `http://localhost:3000`).
