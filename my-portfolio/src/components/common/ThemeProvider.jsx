import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "light";
  }, [theme]);

  const ToggleTheme = () => {
    //setTheme(theme === "dark" ? "light" : "dark");
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

 return(
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
 );
}
export function useTheme(){
    return useContext(ThemeContext);
 }


 
 

