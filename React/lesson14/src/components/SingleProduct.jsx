import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useCart } from "react-use-cart";
import WishlistBtn from "./WishBtn";

const SingleProduct = ({ product }) => {
  const { addItem } = useCart();

  return (
    <>
      <Col lg={3} md={4} sm={6} xs={6} data-aos="zoom-out-left">
        <Card style={{ width: "100%", height: "100%" }}>
          <Card.Img variant="top" src={product.image_url} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <NavLink className="btn btn-primary" to={`/product/${product.id}`}>
              More info
            </NavLink>
            <Button>Add to cart</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleProduct;
