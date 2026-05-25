# AI Chatbot Application

A full-stack AI chatbot application built using React, TypeScript, Node.js, Express, MongoDB, and OpenAI APIs. Users can register, log in securely using JWT authentication, and interact with an AI-powered chatbot with persistent chat history.

---

## Features

- User Authentication (Signup/Login/Logout)
- JWT-based Authorization
- Secure Password Hashing
- Persistent Chat History with MongoDB
- OpenAI GPT Integration
- Full-stack TypeScript Application
- Responsive React Frontend
- REST API Backend
- Protected Routes
- Chat Deletion Support

---

# Tech Stack

## Frontend
- React
- TypeScript
- Vite
- Material UI
- Axios

## Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- OpenAI API

---



# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/kuwar13/chatbot.git
cd chatbot
```

---

# Backend Setup

## Navigate to Backend

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create `.env`

```env
PORT=5000

MONGODB_URL=your_mongodb_connection_string

OPEN_AI_SECRET=your_openai_api_key

OPENAI_ORAGANIZATION_ID=your_openai_org_id_optional

JWT_SECRET=your_jwt_secret

COOKIE_SECRET=your_cookie_secret
```

## Start Backend Server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Navigate to Frontend

```bash
cd ../frontend
```

## Install Dependencies

```bash
npm install
```

## Create `.env`

```env
VITE_API_BASE_URL=http://localhost:5000
```

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# MongoDB Setup

Create a free MongoDB Atlas cluster:

https://www.mongodb.com/cloud/atlas

Add your IP in:
- Network Access
- Database Access

Copy your connection string into:

```env
MONGODB_URL=
```

---

# OpenAI API Setup

Create API key from:

https://platform.openai.com/api-keys

Add it in backend `.env`:

```env
OPEN_AI_SECRET=
```

If you receive quota errors:

```bash
insufficient_quota
```

Enable billing here:

https://platform.openai.com/settings/organization/billing/overview

---

# Available Scripts

## Backend

```bash
npm run dev
npm run build
npm start
```

## Frontend

```bash
npm run dev
npm run build
```

---

# Author

## Kuwarpreet Singh

- GitHub: https://github.com/kuwar13
- LinkedIn: https://www.linkedin.com/in/kuwarpreet-singh-247827220

---
