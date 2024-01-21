import React from "react";
import { useCart } from "react-use-cart";
import {  toast } from 'react-toastify';
const Card = ({ product }) => {

    const {addItem} = useCart()
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}$</p>
          <button className="btn btn-primary" onClick={()=>{
            addItem(product)
            toast.success('Product succesfully added')
          }}>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
