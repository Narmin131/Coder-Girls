import React from "react";
import "./style.scss";
import { useContext } from "react";
import { GlobalState } from "../../Context/GlobalContext";
const Shop = () => {
  const { text } = useContext(GlobalState);

  return <div className="shop-section">
    {text}
  </div>;
};

export default Shop;
