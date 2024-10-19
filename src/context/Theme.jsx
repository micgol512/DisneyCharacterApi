/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Theme = createContext("light");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>;
};
