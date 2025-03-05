import { Component, lazy, Suspense } from "react"; // Added Suspense for lazy loading
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Protected from "./Components/Protected";

const Signup = lazy(() => import("./Pages/Signup"));
const Login = lazy(() => import("./Pages/Login"));
const Products = lazy(() => import("./Pages/Products"));
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Protected component={Products} />}
          />
          <Route path="/about" element={<Protected component={About} />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={1000} />
    </Router>
  );
}

export default App;
