# Permalist

A persisted todo list web application built with **Express.js**, **EJS**, and **PostgreSQL**. Create, manage, and update your daily tasks with a clean, user-friendly interface.

## 📋 Features

- ✅ **Create Tasks** - Add new items to your todo list
- ✏️ **Edit Tasks** - Update existing tasks
- 🗑️ **Delete Tasks** - Remove completed or unwanted items
- 💾 **Persistent Storage** - All tasks are saved in PostgreSQL
- 🎨 **EJS Templating** - Dynamic, server-rendered views

## 🛠️ Tech Stack

- **Backend Framework:** Express.js
- **Templating Engine:** EJS
- **Database:** PostgreSQL
- **Parser:** Body-parser
- **Runtime:** Node.js

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **PostgreSQL** (running locally)

## 🚀 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd permalist
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the PostgreSQL database:**
   - Create a database named `permalist`
   - Create an `items` table with the following schema:
     ```sql
     CREATE TABLE items (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255) NOT NULL
     );
     ```

4. **Configure database connection** (in `index.js`):
   - Update the following credentials to match your PostgreSQL setup:
     ```javascript
     const db = new pg.Client({
       user: "postgres",
       host: "localhost",
       database: "permalist",
       password: "your_password_here",
       port: 5432,
     });
     ```

## ▶️ Running the Application

Start the development server:

```bash
npm start
```

The app will run on `http://localhost:3000`

## 📝 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Retrieve and display all todo items |
| POST | `/add` | Add a new todo item |
| POST | `/edit` | Update an existing todo item |
| POST | `/delete` | Delete a todo item |

## 🗂️ Project Structure

```
permalist/
├── index.js           # Main application file
├── package.json       # Project dependencies
├── public/            # Static files (CSS, images)
├── views/             # EJS template files
│   └── index.ejs      # Main todo list template
└── README.md          # This file
```

## 💡 How It Works

1. The app fetches all items from the PostgreSQL `items` table
2. Items are displayed on the homepage using EJS templates
3. Users can add new items through a form submission
4. Items are stored in the database and persist across sessions
5. Users can edit or delete items with simple interactions

## 📄 License

ISC

## 👤 Author

[Your Name Here]
