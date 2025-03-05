import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../API/API.js"; // Assuming BaseUrl is your API base URL
import Navbar from "../Components/Navbar.jsx";

function Signup() {
  // State for form input fields
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // State for loading and error handling
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if any of the required fields are empty
    if (!name || !email || !phone || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      setLoading(true); // Set loading to true while making the API call
      const response = await axios.post(`${BaseUrl}/students/signup`, {
        name,
        email,
        phone,
        password,
      });
      setLoading(false); // Set loading to false after response is received
      if (response.data.success) {
        // Handle success (e.g., redirect to login page or show success message)
        alert("Signup successful!");
        navigate("/login");
        // Optionally redirect to login page
        // history.push("/login"); // If using react-router
      } else {
        setError("Signup failed: " + response.data.message);
      }
    } catch (err) {
      setLoading(false); // Set loading to false even when error occurs
      setError("Error occurred while signing up: " + err.message);
      console.error("Error during signup:", err);
    }
  };

  return (
    <>
     <Navbar/>
      <div className="container-fluid px-0 overflow-hidden">
        <section className="log-in-section section-b-space">
          <div className="container-fluid-lg w-100">
            <div className="row">
              <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                <div className="image-contain">
                  <img
                    src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/sign-up.png"
                    className="img-fluid"
                    alt="images"
                  />
                </div>
              </div>
              <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                <div className="card shadow-lg border-0 bg-light">
                  <div className="card-body">
                    <div className="log-in-box">
                      <div className="log-in-title text-center">
                        <h3 className="text-dark">
                          Welcome To Signup
                        </h3>
                        <h4 className="text-muted">Create New Account</h4>
                      </div>
                      {error && (
                        <div className="alert alert-danger">{error}</div>
                      )}{" "}
                      {/* Display error */}
                      <div className="input-box mt-3">
                        <form className="row g-4" onSubmit={handleSubmit}>
                          <div className="col-12">
                            <div className="form-floating theme-form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="firstname"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required // Handle input change
                              />
                              <label htmlFor="firstname">
                                Full Name<span className="text-danger">*</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating theme-form-floating">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email Address"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)} // Handle input change
                              />
                              <label htmlFor="email">
                                Email Address
                                <span className="text-danger">*</span>
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating theme-form-floating">
                              <input
                                type="number"
                                className="form-control"
                                id="phone"
                                placeholder="Phone no."
                                value={phone}
                                required
                                onChange={(e) => setPhone(e.target.value)} // Handle input change
                              />
                              <label htmlFor="phone">
                                Phone no.<span className="text-danger">*</span>
                              </label>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-floating theme-form-floating">
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)} // Handle input change
                              />
                              <label htmlFor="password">
                                Password<span className="text-danger">*</span>
                              </label>
                            </div>
                          </div>

                          <div className="col-12 text-center">
                            <button
                              className="btn btn-primary w-50"
                              type="submit"
                              disabled={loading} // Disable the button while loading
                            >
                              {loading ? "Signing Up..." : "Sign Up"}
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="other-log-in text-center mt-1">
                        <h6>or</h6>
                      </div>
                      <div className="sign-up-box text-center mt-1">
                        <h4>Already have an account?</h4>
                        <Link to={"/login"} className="text-primary">
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Signup;
