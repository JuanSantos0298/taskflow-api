# TaskFlow API 🚀

API REST para TaskFlow construida con Node.js + Express + TypeScript.

## Stack
- Node.js + Express + TypeScript
- MongoDB + Mongoose
- JWT Authentication
- Zod Validation
- Swagger Documentation

## Endpoints
- POST /auth/register
- POST /auth/login
- GET /tasks (requiere token)
- POST /tasks (requiere token)
- DELETE /tasks/:id (requiere token)

## Deploy
- API: https://taskflow-api-niqx.onrender.com
- Docs: https://taskflow-api-niqx.onrender.com/api/docs

## Cómo correr localmente
1. Clonar el repositorio
2. `npm install`
3. Crear `.env` con MONGO_URI y JWT_SECRET
4. `npm run dev`