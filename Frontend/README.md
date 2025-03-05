# Frontend - Ecommerce Think Academies assignment

This is the frontend for the Ecommerce Think Academies project, built using React.js. It fetches products from a secure REST API, displays them in a grid, and supports search and lazy loading features.

## Features

- Fetches product data from the API using `GET` requests.
- Displays products in a responsive grid.
- Implements search functionality with debounce optimization.
- Lazy loading of product images to improve performance.
- JWT-based authentication to ensure only logged-in users can access the product list.

## Installation

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
