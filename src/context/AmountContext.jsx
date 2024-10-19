/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AmountContext = createContext(10);

export const AmountProvider = ({ children }) => {
  const [amount, setAmount] = useState(10);
  return (
    <AmountContext.Provider value={{ amount, setAmount }}>
      {children}
    </AmountContext.Provider>
  );
};
