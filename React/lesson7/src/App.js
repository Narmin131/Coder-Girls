import React from "react";
import AppRouter from "./router/AppRouter";
import { GlobalProvider } from "./Context/GlobalContext";
import { ThemeContextProvider } from "./Context/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <GlobalProvider>
          <AppRouter />
        </GlobalProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
