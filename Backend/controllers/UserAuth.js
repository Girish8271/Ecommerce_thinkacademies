const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');

// In-memory database for users and products
let users = [];
let products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  // More products can be added
];

// Rate limiter: 100 requests per hour per user
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100,
  message: 'Too many requests, please try again later.',
});

// Initialize app
const app = express();
app.use(bodyParser.json());

// Simple in-memory authentication
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Public route to authenticate user and generate JWT token
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) return res.sendStatus(404);

  if (!bcrypt.compareSync(password, user.password)) return res.sendStatus(401);

  const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
  res.json({ token });
});

// Protected route to get all products (requires JWT)
app.get('/products', authenticateToken, (req, res) => {
  res.json(products);
});

// Add rate limiter to other routes
app.use(limiter);
