import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState("text-lg");

  const contextValue = { fontSize, setFontSize };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
