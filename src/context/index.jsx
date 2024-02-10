import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState("text-lg");
  const [totalProducts, setTotalProducts] = useState(0);

  const contextValue = {
    fontSize,
    setFontSize,
    totalProducts,
    setTotalProducts,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
