# 📦 Parcel Delivery

A secure, role-based, and user-friendly **Parcel Delivery** frontend built with **React, Redux Toolkit, and RTK Query**.  
This project provides parcel operations and management for **Senders, Receivers, and Admins** with a clean, responsive, and modern UI.

## 🔗 **Live Demo**: [Frontend URL](https://parcel-delivery-nu.vercel.app) | [Backend API](https://parcel-delivery-system-server-eight.vercel.app/)

## 🚀 Features

### 🌐 Public Landing

- Home page with service intro
- About page with mission & team info
- Contact page with simulated inquiry form

### 🔐 Authentication

- JWT-based secure login & registration
- Role-based access (Sender / Receiver / Admin)
- Persisted login state with refresh
- Logout functionality

### 📮 Sender Dashboard

- Create parcel delivery requests
- Cancel parcels (if not dispatched)
- View all created parcels with status logs

### 📥 Receiver Dashboard

- View incoming parcels
- Confirm parcel delivery
- Delivery history tracking

### 🛠️ Admin Dashboard

- Manage all users (block/unblock)
- Manage all parcels (block/unblock, update delivery status)
- Assign delivery personnel (optional)

### 🔎 Parcel Tracking

- Unique tracking ID for each parcel
- Public search by tracking ID
- Status logs with timestamp & updatedBy

### 📊 General Features

- Role-based navigation
- Form validations & error handling
- Pagination, filtering & search
- Global loading & error states
- Toast notifications
- Charts & analytics dashboard
- Fully responsive design

---

## 🛠️ Tech Stack

**Frontend**

- ⚛️ React + TypeScript
- 🌀 Redux Toolkit + RTK Query
- 🎨 Tailwind CSS
- 🔔 React Toastify (or similar)

**Backend**

- 🟩 Node.js + Express
- 🍃 MongoDB + Mongoose
- 🔐 JWT + bcrypt

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/B5Assignment-6
cd parcel-delivery-frontend


npm install


VITE_API_BASE_URL=https://your-backend-url.com/api/v1


npm run dev
```

| Role     | Email                                                   | Password |
| -------- | ------------------------------------------------------- | -------- |
Admim   puspo@gmail.com             A1234!
sender  nila@gmail.com              Nila123#
receiver  maya@gmail.com           Maya123@

📊 Dashboard Overview

Overview Cards: Total parcels, Delivered, In Transit, Pending/Cancelled

Charts: Bar & Pie charts showing trends

Parcel Table: Paginated, searchable, filterable

Status Timeline: Visual history of parcel updates

✅ Best Practices Followed

Modular & reusable components

TypeScript for type safety

RTK Query for API state management

Toast notifications for feedback

Responsive UI with Tailwind

Role-based routing & guards

Commit history with meaningful messages

📜 Submission Guidelines

Clean, modular, documented codebase

README with overview, setup, stack, live URL

Separate frontend & backend repos

Live deployment (Frontend + Backend)


Provided credentials for testing


