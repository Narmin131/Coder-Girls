import { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("DarkMode"))
  );

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <GlobalThemeContext.Provider value={{ darkMode, setDarkMode, toggleTheme }}>
      {children}
    </GlobalThemeContext.Provider>
  );
};
