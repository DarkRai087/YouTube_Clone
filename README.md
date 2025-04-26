# 🎬 MERN Video Sharing Platform

A full-featured YouTube-like platform built with **MERN Stack**, **Tailwind CSS**, and modern tools like **JWT**, **Zod**, and **Cloudinary** for seamless video and image uploads.

---

## 🚀 Features

- 🎥 Upload and watch videos
- 🔐 JWT Authentication (Login & Signup)
- 🧾 Form Validation with Zod
- 🖼️ Image & Video Hosting via Cloudinary
- 📦 MongoDB for data persistence
- 🌗 Light/Dark theme support
- 🧠 Fully responsive UI built with Tailwind CSS

---

## 🧰 Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT
- **Validation**: Zod
- **Media Handling**: Cloudinary

---

### 📸 Screenshots

| UI Screens | |
|-----------|--|
| ![Screenshot 1](https://github.com/DarkRai087/YouTube_Clone/blob/main/frontend/src/assets/home.png) | ![Screenshot 2](https://github.com/DarkRai087/YouTube_Clone/blob/main/frontend/src/assets/signup-signin.png) |
| ![Screenshot 3](https://github.com/DarkRai087/YouTube_Clone/blob/main/frontend/src/assets/uploadVideo.png) | ![Screenshot 4](https://github.com/DarkRai087/YouTube_Clone/blob/main/frontend/src/assets/profile.png) |
| ![Screenshot 5](https://github.com/DarkRai087/YouTube_Clone/blob/main/frontend/src/assets/channelInfo.png) | ![Screenshot 6](https://github.com/DarkRai087/YouTube_Clone/blob/main/frontend/src/assets/comments.png) |

---

### 🔧 Local Setup

### 🛠️ Prerequisites

- Node.js & npm
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Cloudinary account (for storing media)

---

### 🧪 Installation & Running Project


### Clone the repository
git clone https://github.com/DarkRai087/YouTube_Clone
cd video-platform

### Setup backend
cd backend
cp .env.example .env   # Add your MONGO_URI SECRET_KEY  PORT OTHER SENSITIVE DATA
npm install
npm start &            # Starts backend on port 3000

### Setup frontend
cd ../frontend
npm install
npm run dev            # Starts frontend on port 5173


---
