import React from "react";
import { useWishlist } from "react-use-wishlist";

const WishlistBtn = ({ klikEtdiyimMehsul }) => {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const toggleFunc = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
    } else {
      addWishlistItem(myProduct);
    }
  };

  return (
    <>
      <button onClick={() => toggleFunc(klikEtdiyimMehsul)}>
        {inWishlist(klikEtdiyimMehsul.id) ? (
          <i class="fa-solid fa-heart"></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </button>
    </>
  );
};

export default WishlistBtn;
