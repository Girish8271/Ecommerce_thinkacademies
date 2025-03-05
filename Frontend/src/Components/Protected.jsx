import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ component: Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
