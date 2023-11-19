import React from "react";
import { NavLink } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <>
      <div className="col-lg-3 p-3">
        <div className="card" style={{ width: "100%", height: "100%" }}>
          <img src={product.image_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <NavLink  className="btn btn-primary" to={`/product/${product.id}`}>
              More info
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
