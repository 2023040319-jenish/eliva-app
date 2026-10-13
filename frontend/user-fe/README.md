# user-fe

## initial check commit for branch co-relation for the user fe
Customer storefront for Custom Hampers (Eliva). Vite + React + TypeScript.


## Routes

| Path | Access | Purpose |
| --- | --- | --- |
| `/` | public | Landing |
| `/login` | public | Sign in against NestJS `/auth/login` |
| `/register` | public | Register against NestJS `/auth/register` |
| `/account` | authenticated | Session home after JWT is stored |

## Start

```bash
cd front-end/user-fe
copy .env.example .env
npm install
npm run dev
```

Opens at http://localhost:5173

Set `VITE_API_URL` to the NestJS origin (default `http://localhost:3000`).
