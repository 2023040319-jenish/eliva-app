# Front-end



Two React apps share the NestJS API and stay on separate ports.

| App | Folder | Port | Audience |
| --- | --- | --- | --- |
| Customer storefront | `user-fe` | 5173 | Public catalog, register, login, account |
| Admin console | `admin-fe` | 5174 | Admin-only operations |

Each app has a typed Axios client that unwraps `{ success, data }` and surfaces `error.message`.

Start sequence once the API exists:

1. Copy `.env.example` to `.env` in each app
2. Start NestJS
3. `npm run dev` in `user-fe`
4. `npm run dev` in `admin-fe`
