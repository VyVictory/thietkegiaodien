// src/context/LayoutProvider.jsx
import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import authToken from "../components/storage/authToken";
const LayoutContext = createContext();

/**
 * @typedef {"SettingsModal" | "PlayModal" | "LoginModal" | "FooModal"} ModalName
 * @type {React.FC}
 */
export const LayoutProvider = ({ children }) => {
  /** @type {[ModalName, React.Dispatch<React.SetStateAction<ModalName>>]} */
  const [modal, setModal] = useState(null);
  const [LoginForm, setLoginForm] = useState("Login");
  const [isPlay, setIsPlay] = useState(false);
  const [duration, setDuration] = useState(240);
  const [musicData, setMusicData] = useState(null);
  const [musicDetail, setMusicDetail] = useState(null);
  const [user, setUser] = useState(null);
  const [position, setPosition] = React.useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [volume, setVolume] = React.useState(50);

  const token = authToken.getToken();
  useEffect(() => {
    if (authToken.getToken()) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [token]);
  useEffect(() => {
    console.log("isModal", modal);
  }, [modal]); // Empty array means this effect runs only once, when the component mounts
  return (
    <LayoutContext.Provider
      value={{
        isPlay,
        setIsPlay,
        modal,
        setModal,
        isLogin,
        setIsLogin,
        LoginForm,
        setLoginForm,
        musicData,
        setMusicData,
        user,
        musicDetail,
        setMusicDetail,
        position,
        setPosition,
        setUser,
        duration,
        setDuration,
        volume,
        setVolume,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
