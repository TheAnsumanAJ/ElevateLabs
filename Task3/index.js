const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Important!
app.use(express.json());

let books = [];
let nextId = 1;

// Routes
app.get('/books', (req, res) => res.json(books));

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ error: "Title and author required" });
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  if (title) book.title = title;
  if (author) book.author = author;
  res.json(book);
});

app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ error: "Book not found" });
  books.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
