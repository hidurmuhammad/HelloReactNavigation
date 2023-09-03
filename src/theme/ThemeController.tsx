import React, { createContext, useState } from 'react';
export const ThemeContext = createContext({});
export interface props {children?: React.ReactNode; }

export const PreferencesContext = createContext({
    toggleTheme: () => {},
    isThemeDark: false,
  });
export const ThemeController = ({ children}:props) => {
const [theme, setTheme] = useState(false);
   const toggleTheme = (value:any) => {
       if (value === true) {
           setTheme(true);
       } else {
           setTheme(false);
       }
   };
   return (
       <ThemeContext.Provider value={{ theme, toggleTheme }}>
           {children}
       </ThemeContext.Provider>
   );
};