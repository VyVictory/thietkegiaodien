import React, { createContext, useState } from "react";
import { LayoutProvider } from "./LayoutProvider";

// 1. Tạo Context
export const AppContext = createContext();

// 2. Tạo Provider
const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Ví dụ: Quản lý theme (dark/light)

  // Hàm để chuyển đổi theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const [login, setLoginModel] = useState(true);
  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      <LayoutProvider>{children}</LayoutProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
