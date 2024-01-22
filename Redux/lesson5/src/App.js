import React, { useEffect } from "react";
import AppRouter from "./router/AppRouter";
import { GlobalProvider } from "./Context/GlobalContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { CartProvider } from "react-use-cart";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const blogs = useSelector((store) => store.AppReducer);

  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(blogs));
  }, [blogs]);
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
