Frontend - React-based (frontend/README.md)
markdown
Copy
# Frontend - Ecommerce Think Academies Assignment

This is the frontend for the Ecommerce Think Academies project, built using React.js. It fetches products from a secure REST API, displays them in a grid, and supports search and lazy loading features.

## Features

- Fetches product data from the API using `GET` requests.
- Displays products in a responsive grid.
- Implements search functionality with debounce optimization.
- Lazy loading of product images to improve performance.
- JWT-based authentication to ensure only logged-in users can access the product list.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/Ecommerce_thinkacademies.git
   cd Ecommerce_thinkacademies/frontend
Install the required dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
Open your browser and go to http://localhost:3000 to view the application.

Environment Variables
Make sure to set the following environment variable for the backend API:

REACT_APP_API_BASE_URL: The base URL of the backend API.
Example:

bash
Copy
REACT_APP_API_BASE_URL=http://localhost:5000
You can create a .env file in the root of the frontend folder and add the above variable.

Folder Structure
bash
Copy
frontend/
├── public/                   # Public assets (images, icons, etc.)
├── src/                      # Application code
│   ├── components/           # Reusable React components
│   ├── pages/                # Pages of the application
│   ├── App.js                # Main app component
│   ├── index.js              # Entry point for React app
│   └── api.js                # API call helper methods
├── .env                      # Environment variables
└── package.json              # Project dependencies and scripts
Dependencies
React
Axios (for API calls)
React Router
React Toastify (for notifications)
Lodash (for debounce)
License
This project is licensed under the MIT License.

yaml
Copy

---

### **Backend - Node.js-based (`backend/README.md`)**

```markdown
# Backend - Ecommerce Think Academies Assignment

This is the backend for the Ecommerce Think Academies project, built using Node.js and Express. It provides a secure REST API for managing products with JWT authentication and rate limiting.

## Features

- Secure REST API for managing products (`GET`, `POST`, `PUT`, `DELETE`).
- JWT-based authentication for secure endpoints.
- Rate limiting of 100 requests per hour per user.
- Products are fetched from a mock database (could be extended to a real DB in production).

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/Ecommerce_thinkacademies.git
   cd Ecommerce_thinkacademies/backend
Install the required dependencies:

bash
Copy
npm install
Create a .env file and add the following environment variables:

bash
Copy
PORT=5000
JWT_SECRET=your_jwt_secret_key
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW_MS=3600000   # 1 hour in milliseconds
Start the server:

bash
Copy
npm start
The backend will be running on http://localhost:5000.

Endpoints
GET /products
Description: Fetch all products.
Response: A list of products with id, name, and price.
POST /login
Description: User login to get a JWT token.

Request Body:

json
Copy
{
  "email": "user@example.com",
  "password": "password"
}
Response: JWT token for authentication.

Example response:

json
Copy
{
  "success": true,
  "jwtToken": "your-jwt-token"
}
POST /products (Admin-only)
Description: Create a new product (requires authentication).
Request Body:
json
Copy
{
  "name": "Product Name",
  "price": 10
}
Response: Created product object.
JWT Authentication
Each request to protected routes must include the JWT token in the Authorization header as a Bearer token.
Example:

makefile
Copy
Authorization: Bearer your-jwt-token
Rate Limiting
This API implements rate limiting of 100 requests per user per hour.
If a user exceeds the limit, they will receive a 429 Too Many Requests error.
Folder Structure
bash
Copy
backend/
├── controllers/               # Route handlers (logic for each endpoint)
│   └── productController.js   # Logic for handling product requests
├── middleware/                # Middleware functions (e.g., JWT authentication, rate limiter)
│   ├── authenticateToken.js   # JWT authentication middleware
│   └── rateLimit.js           # Rate limiting middleware
├── models/                    # Database models (if using a real DB)
│   └── productModel.js        # Mock product model
├── routes/                    # Express route definitions
│   └── productRoutes.js       # Routes for product management
├── .env                       # Environment variables
├── index.js                   # Entry point for Express server
└── package.json               # Project dependencies and scripts
Dependencies
Express
JWT (jsonwebtoken)
Bcrypt (for password hashing)
Rate-limiter-flexible (for rate limiting)
dotenv (for environment variables)
License
This project is licensed under the MIT License.

markdown
Copy

---

### Summary of Steps:
1. **Frontend (`frontend/README.md`)**: 
   - Provides instructions for setting up the React app, fetching data, environment variables, and folder structure.
   - Highlights key frontend functionality such as lazy loading, debounce search, and JWT handling.

2. **Backend (`backend/README.md`)**:
   - Explains how to set up the Node.js backend, environment variables, endpoints, and JWT authentication.
   - Details rate limiting and the folder structure for managing controllers, routes, and middleware.

You can copy these `README.md` files and place them in the respective `frontend` and `backend` directories in your GitHub repository. This way, you will have a detailed guide for both the frontend and backend setup.


