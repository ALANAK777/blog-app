# 📝 Full Stack Internship Assignment

## 🚀 Task Title
**Build a Blog Editor Page with Backend & Auto-Save Draft Feature**

---

## 🎯 Objective

Develop a full-stack blog editor application that enables users to:
- Write, edit, and save blog posts
- Publish content
- Automatically save drafts with debounce-based inactivity tracking

This will evaluate your skills in frontend development, backend API design, database integration, and system architecture.

---

## 💻 Tech Stack Guidelines

### Frontend
- React

### Backend (Choose One)
- Node.js with Express.js

### Database
- MongoDB


## 🖥️ Application Features

### Blog Editor Page (Frontend)

**Fields:**
- `Title`: Text input
- `Content`: Rich text editor or `<textarea>`
- `Tags`: Optional, comma-separated

**Actions:**
- `Save as Draft` button
- `Publish` button
- **Auto-Save Draft**:
  - Every 30 seconds
  - OR after 5 seconds of inactivity (debounce)

**Blog Display:**
- View list of all blogs
  - Published blogs
  - Drafts
- Edit and update existing drafts or posts

---

## 🧠 Backend API Requirements

### Blog Schema

| Field       | Type     | Description                |
|-------------|----------|----------------------------|
| `id`        | string   | Unique identifier          |
| `title`     | string   | Blog title                 |
| `content`   | string   | Blog content               |
| `tags`      | string[] | Comma-separated list       |
| `status`    | string   | 'draft' or 'published'     |
| `created_at`| Date     | Creation timestamp         |
| `updated_at`| Date     | Last update timestamp      |

### API Endpoints

| Method | Endpoint               | Description                    |
|--------|------------------------|--------------------------------|
| POST   | `/api/blogs/save-draft` | Save or update a draft         |
| POST   | `/api/blogs/publish`    | Save and publish an article    |
| GET    | `/api/blogs`            | Retrieve all blogs             |
| GET    | `/api/blogs/:id`        | Retrieve a blog by ID          |

---

## ✨ Bonus (Optional but Preferred)

- Auto-save using **debounce** (5s inactivity)
- Visual auto-save **notifications** (toast/snackbar)
- Use **JWT** or **session-based authentication** for protected APIs

---

## 🗺 System Architecture Diagram

```text
[ User (Browser) ]
        |
        V
[ Frontend (React) ]
        |
 REST API Calls (HTTP)
        |
        V
[ Backend (Experess.js) ]
        |
        V
[ Database (MongoDB) ]
