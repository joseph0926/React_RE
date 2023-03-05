import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Fragment>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Item1</Link>
        </li>
        <li>
          <Link to="/products/p2">Item2</Link>
        </li>
        <li>
          <Link to="/products/p3">Item3</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Products;
