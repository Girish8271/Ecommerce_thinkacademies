const express = require('express');
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

// User Routes
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/users', userController.users);

// Product Routes (Protected)
router.get('/products', authenticateToken, productController.getProducts);

module.exports = router;
