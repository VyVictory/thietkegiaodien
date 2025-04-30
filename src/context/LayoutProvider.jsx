// src/context/LayoutProvider.jsx
import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

/**
 * @typedef {"SettingsModal" | "PlayModal" | "LoginModal" | "FooModal"} ModalName
 * @type {React.FC}
 */
export const LayoutProvider = ({ children }) => {
  /** @type {[ModalName, React.Dispatch<React.SetStateAction<ModalName>>]} */
  const [modal, setModal] = useState(null);
  const [isPlay, setIsPlay] = useState(true);
  return (
    <LayoutContext.Provider value={{ isPlay, setIsPlay, modal, setModal }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
