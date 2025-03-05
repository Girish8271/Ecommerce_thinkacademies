const jwt = require('jsonwebtoken');

// Authentication middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Token invalid
        req.user = user; // Attach user info to the request object
        next();
    });
};

module.exports = authenticateToken;
