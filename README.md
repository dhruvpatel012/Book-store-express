# 📚 Book Management System

[Watch Project Explanation Video](https://drive.google.com/file/d/1lE3rCb7XJg0RDQMiZSSdlUJ73kADdwkt/view?usp=sharing)

A simple RESTful API built using **Node.js, Express.js, MongoDB, and Mongoose** to manage book records with complete CRUD functionality.

## Tech Stack

- **Node.js** – JavaScript runtime environment
- **Express.js** – Backend framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **Nodemon** – Automatic server restarting during development

## Features

- Add new books.
- Retrieve all books.
- Retrieve a single book by ID.
- Update existing book details.
- Delete books by ID.
- Basic error handling using try-catch.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/books` | Add a new book |
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get book by ID |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

## API Testing

All API endpoints can be tested using **Postman/ThunderClient** by sending HTTP requests with JSON data.


## Installation & Setup

**1. Clone the repository**
```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project folder**
```bash
cd Bookstore
```

**3. Install dependencies**
```bash
npm install
```

**4. Start the server**
```bash
npm run server
```

Make sure MongoDB is running locally before starting the application.

Server runs at: `http://localhost:1212`

