📋 Task Manager Application (Dockerized Full-Stack App)
📖 Project Overview

This project is a full-stack Task Manager application that allows users to create, view, update, and delete tasks through a simple and intuitive interface. The application is built using a Node.js backend API and a containerized frontend UI, both running in separate Docker containers.

The backend exposes a RESTful API that handles all task operations, while the frontend communicates with the API using the Fetch API. The entire system is orchestrated using Docker Compose, enabling easy setup and consistent deployment across environments.

🚀 Features
Create new tasks
View all tasks
Update existing tasks
Delete tasks
RESTful API design
Cross-origin communication enabled via CORS
Fully containerized using Docker
🛠️ Technologies Used
Node.js (ES6)
Express.js
Docker
Docker Compose
HTML / CSS / JavaScript (Frontend)
Fetch API
CORS (Cross-Origin Resource Sharing)
📂 Project Structure
task-manager/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── frontend/
│   ├── index.html
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
⚙️ Setup & Installation
✅ Prerequisites

Make sure you have the following installed:

Node.js
Docker Desktop
🔧 Option 1: Run with Docker Compose (Recommended)
Step 1: Clone the Repository
git clone <your-repo-url>
cd task-manager
Step 2: Build and Run Containers
docker-compose up --build
🐳 Option 2: Pull Prebuilt Images from Docker Hub

You can run the application without building locally by pulling the images directly from Docker Hub.

Step 1: Pull Images
docker pull tayeemmanu/task-frontend
docker pull tayeemmanu/task-backend
Step 2: Run Containers
docker run -d -p 3000:3000 tayeemmanu/task-backend
docker run -d -p 8080:80 tayeemmanu/task-frontend

⚠️ Note: Ensure the frontend is configured to communicate with the backend at http://localhost:3000.

🌐 Access the Application

Frontend UI:

http://localhost:3000

Backend API:

http://localhost:5000
🔌 API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Create a new task
PUT	/tasks/:id	Update a task
DELETE	/tasks/:id	Delete a task
🔐 CORS Configuration

Since the frontend and backend run on different containers/ports, CORS is enabled in the backend to allow cross-origin requests. This ensures the frontend can successfully communicate with the API without browser security restrictions.

🧪 Development Notes
Backend uses ES6 syntax for modern JavaScript
API follows RESTful design principles
Docker ensures consistent environments across machines
📦 Future Improvements
Add database integration (MongoDB / PostgreSQL)
Implement user authentication
Improve UI/UX design
Add task filtering and search
👨‍💻 Author
Taye Emmanuel Tebo
