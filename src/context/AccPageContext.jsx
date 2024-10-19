/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AccPageContext = createContext(1);

export const AccPageProvider = ({ children }) => {
  const [accPage, setAccPage] = useState(1);
  return (
    <AccPageContext.Provider value={{ accPage, setAccPage }}>
      {children}
    </AccPageContext.Provider>
  );
};
