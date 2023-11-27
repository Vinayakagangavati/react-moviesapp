import React, { createContext, useState } from "react";
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [childData, setChildData] = useState("Default Child Data");

  const contextValue = {
    childData,
    setChildData,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
