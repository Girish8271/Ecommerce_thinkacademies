import React, { useEffect, useState } from "react";
import BaseUrl from "../API/API.js";
import axios from "axios";
import Navbar from "../Components/Navbar.jsx";

const Products = () => {
  const [products, setProducts] = useState([]); // Plural for clarity
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Get the JWT token from localStorage
        const token = localStorage.getItem("jwtToken");
        // console.log(token)

        if (!token) {
          setError("You must be logged in to view products.");
          setLoading(false);
          return;
        }

        // Make the GET request with Authorization header
        const response = await axios.get(`${BaseUrl}/products`, {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the JWT token here
          },
        });

        // Check if the response contains data and it's an array
        if (response.data) {
          setProducts(response.data); // Set products array from response
        } else {
          setError("Unexpected response format");
        }

        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError("Failed to fetch product data");
        setLoading(false); // Set loading to false even when error occurs
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs once when the component mounts


  if (loading) {
    return (
      <>
        <Navbar />
        <div className="bg-light">
          <div className="container mt-5">
            <h2 className="text-center mb-4">Loading Products...</h2>
            <table className="table table-hover">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {Array(5) // Skeleton rows for 5 entries
                  .fill(0)
                  .map((_, index) => (
                    <tr key={index}>
                      <td>
                        <div
                          className="bg-secondary rounded"
                          style={{ height: "24px", width: "40px" }}
                        ></div>
                      </td>
                      <td>
                        <div
                          className="bg-secondary rounded"
                          style={{ height: "24px", width: "150px" }}
                        ></div>
                      </td>
                      <td>
                        <div
                          className="bg-secondary rounded"
                          style={{ height: "24px", width: "80px" }}
                        ></div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="bg-light">
          <div className="container mt-5">
            <h2 className="text-center text-danger">{error}</h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-light">
        <div className="container mt-5">
          <h2 className="text-center mb-4">Products Dashboard</h2>
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td> {/* Price displayed with $ */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
