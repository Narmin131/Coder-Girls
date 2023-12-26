import React from "react";
import AppRouter from "./router/AppRouter";
import { GlobalProvider } from "./Context/GlobalContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
const App = () => {
  return (
    <>
      <CartProvider>
        <WishlistProvider>
          <ThemeContextProvider>
            <GlobalProvider>
              <AppRouter />
            </GlobalProvider>
          </ThemeContextProvider>
        </WishlistProvider>
      </CartProvider>
    </>
  );
};

export default App;
