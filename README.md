# 📚 StudyNook – Smart Study Room Booking Platform

> A full-stack MERN web application that allows students and library users to discover, list, and book study rooms with real-time availability and conflict-free scheduling.

🔗 Live Site: https://studynook-alpha.vercel.app/

---

## ✨ Key Features

- 🏫 Browse and book available study rooms with real-time availability
- ⏱️ Smart booking system with automatic time conflict prevention
- 🔐 Secure authentication using JWT stored in HTTP-only cookies
- 🧑‍💻 Role-based access: users can manage their own listings & bookings
- 🔎 Advanced search and filtering (name, amenities, price, floor)
- 📱 Fully responsive UI optimized for mobile, tablet, and desktop

---

## 🚀 Tech Stack

### Frontend
- Next.js(App Router)
- React.js
- Tailwind CSS / CSS3
- React Hook Form
- React Hot Toast / Sonner

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cookie Parser

---

## 🧭 Application Layout

### Public Layout
- Home
- All Rooms
- Login / Register
- Footer with social links

### Private Layout (Logged-in users)
- Add Room
- My Listings
- My Bookings
- Profile Dropdown (Logout)

---

## 🏠 Pages Overview

### 🏡 Home Page
- Hero section with CTA: **Explore Rooms**
- Latest 6 study rooms (MongoDB sorted & limited)
- Room cards with:
  - Image
  - Name & description
  - Floor & capacity
  - Hourly rate
  - Amenities preview
- Extra modern UI sections for engagement

---

### 🏫 Rooms Page
- Grid layout (responsive: 3/2/1 columns)
- Search by room name
- Filter by amenities, price, and floor
- “No rooms found” fallback state

---

### 📄 Room Details Page
- Full room information
- Booking count tracker
- Book Now / Login to Book button
- Owner controls:
  - Edit room
  - Delete room (with confirmation)

---

### ➕ Add Room
- Create new study room listing
- Amenities checklist (WiFi, Projector, etc.)
- Image URL support
- Auto-redirect after success

---

### 📅 Booking System
- Date & time slot selection
- Real-time price calculation
- Conflict detection (no overlapping bookings)
- Cancel booking feature (future bookings only)

---

### 📊 My Bookings
- View all user bookings
- Status indicators (Confirmed / Cancelled)
- Cancel booking with confirmation modal

---

## 🔐 Authentication System

- JWT-based authentication
- Stored in HTTP-only cookies
- Google OAuth support
- Secure route protection via middleware

### Features
- Login / Register validation
- Strong password rules
- Persistent session handling
- Auto logout support

---

## ⚙️ Advanced Features

- ⚡ Time-slot conflict detection using MongoDB queries
- 🔎 Search using regex filtering
- 🧠 Advanced booking validation logic
- 🧾 Dynamic page titles per route
- ⏳ Global loading spinner / skeleton UI
- ❌ Custom 404 Not Found page
- 🔔 Toast notifications (no alerts used anywhere)

---


## 🧠 What Makes This Project Special

- Prevents double booking using intelligent time-slot validation
- Clean separation of public and private layouts
- Secure authentication using modern best practices
- Fully scalable backend architecture (MERN stack)
- Designed with recruiter-friendly UI/UX principles

---



## 🛠️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/studynook.git

# Install dependencies
cd client && npm install
cd server && npm install

# Run frontend
npm run dev

# Run backend
npm start