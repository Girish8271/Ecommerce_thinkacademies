import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Navbar = () => {

  const logout = () =>{
    localStorage.removeItem("login");
    toast.success("Logged Out Successfully!");
  }
  

  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://img.freepik.com/premium-vector/success-student-consulting_7109-29.jpg?semt=ais_hybrid" // Replace with your logo URL
            alt="Logo"
            className="me-2 rounded-2" // Adds spacing to the right of the image
            style={{ height: "40px" }}
          />
          
        </Link>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" onClick={logout} to="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
