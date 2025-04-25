import React, { createContext, useContext, useState } from "react";

// 1. Tạo Context
const LayoutContext = createContext();

// 2. Tạo Provider
export const LayoutProvider = ({ children }) => {
  const [isPlay, setIsPlay] = useState(true);
  return (
    <LayoutContext.Provider value={{ isPlay, setIsPlay }}>
      {children}
      
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
