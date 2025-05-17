# Blog Editor Application

A full-stack blog editor application with features like draft saving, auto-save, and user authentication.

## Deployment Instructions

### Prerequisites
1. A Vercel account
2. A MongoDB Atlas account
3. Git installed on your machine

### Environment Variables
Set up the following environment variables in your Vercel project:

#### Backend Environment Variables
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Your JWT secret key
- `NODE_ENV`: Set to 'production'
- `FRONTEND_URL`: Your deployed frontend URL (e.g., https://your-app.vercel.app)

### Deployment Steps

1. **Prepare Your Repository**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository
   - Configure the project:
     - Framework Preset: Other
     - Root Directory: ./
     - Build Command: (leave empty, handled by vercel.json)
     - Output Directory: (leave empty, handled by vercel.json)
   - Add your environment variables
   - Click "Deploy"

3. **Verify Deployment**
   - Check the deployment logs for any errors
   - Test the application:
     - User registration/login
     - Creating and editing blogs
     - Auto-save functionality
     - Draft management

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**
   - Create `.env` file in the backend directory
   - Create `.env.local` file in the frontend directory

4. **Start development servers**
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend server
   cd ../frontend
   npm start
   ```

### Project Structure
```
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.js
│   └── package.json
├── vercel.json
└── README.md
```

### Features
- User authentication (JWT)
- Blog creation and editing
- Auto-save drafts
- Draft management
- Tag support
- Responsive design
- Real-time updates

### Technologies Used
- Frontend: React, Material-UI
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
- Deployment: Vercel

## Features

- Write, edit, and save blog posts
- Auto-save drafts with debounce-based inactivity tracking
- Publish/unpublish blog posts
- Tag management
- Draft management

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js with Express.js
- **Database**: MongoDB

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```
3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```
4. Start the development servers:
   ```bash
   npm start
   ```

This will start both the backend server (on port 5000) and frontend development server (on port 3000).

## Project Structure

```
├── frontend/          # React frontend application
├── backend/           # Node.js/Express backend server
├── package.json       # Root package.json for managing both frontend and backend
└── README.md         # This file
```

## API Endpoints

- `POST /api/blogs/save-draft` - Save or update a draft
- `POST /api/blogs/publish` - Save and publish an article
- `GET /api/blogs` - Retrieve all blogs
- `GET /api/blogs/:id` - Retrieve a blog by ID 