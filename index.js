const express = require("express");
const mongoose = require("mongoose");

const app = express(); // invoke

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/Bookstore")
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Database connection error:", err));

// Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  category: String,
  stock: Number,
  published: Boolean,
  rating: Number,
});

// Model
const BookData = mongoose.model("bookDB", bookSchema);

// POST - Create a new book
app.post("/books", async (req, res) => {
  try {
    const book = await BookData.create(req.body);

    res.json({
      message: "Book added successfully",
      data: book,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Get all books
app.get("/books", async (req, res) => {
  try {
    const books = await BookData.find();

    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Get a single book by ID
app.get("/books/:id", async (req, res) => {
  try {
    const book = await BookData.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - Update a book
app.put("/books/:id", async (req, res) => {
  try {
    const book = await BookData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({
      message: "Book updated successfully",
      data: book,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE - Delete a book
app.delete("/books/:id", async (req, res) => {
  try {
    const book = await BookData.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({
      message: "Book deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Server
app.listen(1212, () => {
  console.log("Server is running on port 1212");
});
