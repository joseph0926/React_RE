import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <div>
      <h1>Home</h1>
      <Link to="/products">Go to Products</Link>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </div>
  );
};

export default Home;
