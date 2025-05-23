# 🏥 Health Information System

A basic full-stack health information system built as part of the CEMA Software Engineering Intern Challenge.

## 🔗 Live Demo

-   **Frontend:** [CEMA Health Info System](https://cema-assignment-frontend.onrender.com/)

## 🔧 Tech Stack

-   **Frontend**: React + Vite + Tailwind CSS
-   **Backend**: Node.js + Express.js
-   **Database**: MongoDB Atlas (via Mongoose)
-   **API**: RESTful
-   **Deployment**: (Frontend: Render, Backend: Render)

---

## 🚀 Features

-   Create health programs (e.g. TB, Malaria, HIV)
-   Register clients (with national ID, age, gender)
-   Enroll clients in one or more programs
-   Search and view client profiles (with program history)
-   REST API exposed for external access

---

## 🧩 Folder Structure

├── backend          # Node.js/Express.js backend code│   ├── models       # Mongoose data models│   ├── routes       # API routes│   ├── controllers  # (Optional) Logic for routes│   ├── config       # (Optional) Configuration files│   ├── server.js    # Main server file│   └── ...├── frontend         # React/Vite frontend code│   ├── src          # React source code│   │   ├── components   # Reusable components│   │   ├── pages      # Application pages/views│   │   ├── App.jsx    # Main application component│   │   └── ...│   ├── public         # Static assets (e.g., index.html)│   ├── vite.config.js # Vite configuration│   └── ...├── .gitignore       # Specifies intentionally untracked files that Git should ignore├── package.json     # Node.js project configuration (for backend)├── yarn.lock        # (If using Yarn)└──
