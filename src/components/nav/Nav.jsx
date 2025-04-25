import React, { useEffect, useRef } from "react";

import log from "../../assets/logo.png";

export default function Nav() {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 0) {
          navRef.current.style.backgroundColor = "black";
          navRef.current.style.borderColor = "#404040";
        } else {
          navRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
          navRef.current.style.borderColor = "transparent";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className="w-full h-full border-b border-transparent transition-colors duration-300 "
    >
    </div>
  );
}
