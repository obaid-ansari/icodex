# 🔐 MERN Authentication System

A simple **Authentication System** built using the **MERN Stack (MongoDB, Express, React, Node.js)**.
This project demonstrates how a **React frontend connects with a Node.js/Express backend API** to handle secure **user registration and login**.

The application allows users to create an account, log in, and access protected resources using **JWT-based authentication**.

---

## 🚀 Features

- User **Signup / Registration**
- User **Login Authentication**
- **JWT (JSON Web Token)** based authentication
- **Password hashing using bcrypt**
- **Protected API routes**
- React frontend connected to backend using **Axios**
- Basic **form validation**

---

## 🛠️ Tech Stack

**Frontend**

- React
- React Router
- Axios

**Backend**

- Node.js
- Express.js

**Database**

- MongoDB

**Authentication**

- JWT (JSON Web Token)
- bcrypt

---

## 📂 Project Structure

```
project
│
├── client/        # React frontend
│
├── server/        # Node.js + Express backend
│
└── README.md
```

---

## ⚙️ How It Works

1. User registers through the **React frontend**.
2. The frontend sends a request to the **backend API**.
3. The backend hashes the password using **bcrypt** and stores the user in **MongoDB**.
4. During login, the backend verifies the credentials.
5. If valid, the server generates a **JWT token**.
6. The client stores and uses this token to access **protected routes**.

---

## ▶️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/project-name.git
```

### 2️⃣ Install dependencies

```bash
cd server
npm install

cd ../client
npm install
```

### 3️⃣ Run the project

Start backend:

```bash
cd server
npm start
```

Start frontend:

```bash
cd client
npm run dev
```
