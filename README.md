1- Run Backend (PHP server)

Navigate to the backend folder and start PHP’s built-in server:

cd project1/backend
php -S localhost:8000 -t .

2️⃣ Run Frontend (React app)

Open a new terminal and navigate to frontend:

cd project1/frontend
npm install   # install dependencies
npm run dev   # start Vite dev server


Frontend runs at: http://localhost:5173


📩 How Contact Form Works

User fills in Name, Email, Project, and Message

Data is sent via POST to messages.php

Messages are stored in backend/messages.txt in this format:


Backend runs at: http://localhost:8000/messages.php

A fully responsive personal portfolio web application built with ReactJS, Tailwind CSS, and PHP backend API.
This project showcases personal projects, testimonials, and includes a working contact form that stores messages in a backend file.

📌 Features

⚡ Modern UI built with React + Tailwind CSS

📱 Responsive Design (mobile-first, works across devices)

🖼️ Hero Section with profile picture, name, and tagline

💼 Projects Section to showcase work

⭐ Testimonials Section with client feedback

📬 Contact Form integrated with PHP backend

Validates inputs (name, email, project, message)

Saves messages in messages.txt

Displays success/error notifications

🌍 Deployed-ready setup for GitHub Pages / Vercel (frontend)

🛠️ Tech Stack

Frontend:

ReactJS (Vite)

Tailwind CSS

Backend:

PHP (Simple API for contact form)


project1/
│── backend/
│   ├── messages.php        # Handles contact form submission (POST)
│   └── messages.txt        # Stores submitted messages
│
│── frontend/
│   ├── node_modules/       # Dependencies
│   ├── public/             # Static assets (favicon, images, etc.)
│   ├── src/
│   │   ├── components/     # Reusable React components (Navbar, Footer, etc.)
│   │   ├── data/           # Static data (projects, testimonials, etc.)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility/helper functions
│   │   ├── pages/          # Main pages (Home, Projects, Contact, etc.)
│   │   └── App.jsx         # Main app entry
│   ├── index.html
│   └── package.json
│
└── README.md
