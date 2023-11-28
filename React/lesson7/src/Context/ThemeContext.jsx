import { useState } from "react";
import { createContext } from "react";

export const GlobalThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = ()=>{
    setDarkMode(!darkMode)
  }

  return (
    <GlobalThemeContext.Provider value={{darkMode, setDarkMode, toggleTheme}}>
      {children}
    </GlobalThemeContext.Provider>
  );
};
