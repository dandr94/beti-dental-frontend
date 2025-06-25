# 🦷 Beti Dental Web App — Frontend

This repository contains the **frontend** for the Beti Dental web application, built using **Next.js** and **Material
UI (MUI)**. It provides an interactive and responsive user interface for both patients and admins to manage dental
appointments, schedules, and users.

---

> ⚠️ **Work in Progress**
>
> This project is still under development. Some features are incomplete, and parts of the codebase and file structure
> may require further cleanup and organization.

---

## 🔗 Related Repositories

The **Beti Dental Backend** is built with **Django** and **Django REST Framework**.  
It handles authentication, scheduling, role-based access, and API services.

[Beti Dental Backend Repository](https://github.com/dandr94/beti-dental-backend)

---

## 🧠 Overview of Stack

- **Next.js**.
- **Material UI (MUI)**
- **Axios** for API calls
- **Framer Motion** for animations
- **JWT Auth** via HTTP-only cookies
- **Integrated with Django REST API** for authentication, user management, and scheduling.
- **Role-based navigation:** Dynamic content based on whether you're an admin, dentist, or patient.
- **Custom calendar and scheduling logic**

---

## 🎯 Core Features

### 🧑 Patient Features

- **Homepage:** Clean and informative landing page.
- **Booking System:**
    - Calendar-based UI with availability color codes.
    - Book an appointment by selecting a date,available hour and entering your details.
- **Feedback:**
    - Booked slots disappear until the dentist approves the booking.
    - Canceled bookings reopen the slot instantly.

### 👩‍⚕️ Admin Features

- **Schedule Management:**
    - Toggle days as working/non-working.
    - Apply presets, add 30-min / 1-hour / custom slots.
    - Manage dentist availability visually.
- **User Management:**
    - View, create, update, and delete users.
    - Create users with role, name, email, password via modal.
- **Booking Moderation:**
    - Approve/cancel bookings.
    - Provide reasons for cancellation.

---

## 📸 Visual Previews

Check the [PREVIEW](preview/) folder for full GIF walkthroughes and UI screenshots.

---

## Setup Instructions

### Prerequisites

- Node.js 18+
- Backend API running (see [Beti Dental Backend](https://github.com/dandr94/beti-dental-backend))

### Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. Install Dependencies:

    ```bash
    npm install

3. Create a .env File:

   Create a .env file in the project root with the following required environment variables:

    ```bash
    NEXT_PUBLIC_HOST=http://localhost:8000
    NEXT_PUBLIC_HOST_PUBLIC_PREFIX=api # default
    NEXT_PUBLIC_HOST_PRIVATE_PREFIX=administration # default

Adjust the values according to your environment.

4. Start development server

    ```bash
    npm run dev