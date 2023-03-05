import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>ProductDetail Page</h1>
      <p>{params.productId}</p>
    </Fragment>
  );
};

export default ProductDetail;
