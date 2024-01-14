import React, { useEffect } from "react";
import AppRouter from "./router/AppRouter";
import { GlobalProvider } from "./Context/GlobalContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import { useState } from "react";
import Preloader from "./components/Preloader";


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <CartProvider>
          <WishlistProvider>
            <ThemeContextProvider>
              <GlobalProvider>
                <AppRouter />
              </GlobalProvider>
            </ThemeContextProvider>
          </WishlistProvider>
        </CartProvider>
      )}
    </>
  );
};

export default App;
