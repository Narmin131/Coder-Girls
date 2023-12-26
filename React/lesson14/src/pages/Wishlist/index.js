import React from "react";
import { useWishlist } from "react-use-wishlist";
import ShopCard from "../../components/ShopCard";

const Wishlist = () => {
  const { items } = useWishlist();
  return (
    <>
      {items.map((item) => {
        return <ShopCard shopProduct={item} />;
      })}
    </>
  );
};

export default Wishlist;
