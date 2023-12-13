import React from "react";
import AppRouter from "./router/AppRouter";
import { GlobalProvider } from "./Context/GlobalContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { CartProvider } from "react-use-cart";
const App = () => {
  return (
    <>
      <CartProvider>
        <ThemeContextProvider>
          <GlobalProvider>
            <AppRouter />
          </GlobalProvider>
        </ThemeContextProvider>
      </CartProvider>
    </>
  );
};

export default App;
