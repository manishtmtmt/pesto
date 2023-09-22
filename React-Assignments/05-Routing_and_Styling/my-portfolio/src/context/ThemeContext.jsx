/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useState } from "react";
import { getData, saveData } from "../hooks/useLocalStorage";

export const ThemeContext = createContext("light");

const isCurrentThemeDark = getData("isDark");
const initialValue = isCurrentThemeDark !== null ? isCurrentThemeDark : false;

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(initialValue);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  useEffect(() => {
    saveData("isDark", isDark);
  }, [isDark, toggleTheme]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
