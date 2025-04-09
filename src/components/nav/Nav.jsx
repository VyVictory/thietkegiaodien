import React, { useEffect, useRef } from "react";

export default function Nav() {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 1) {
          navRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        } else {
          navRef.current.style.backgroundColor = "black";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-black w-full h-full border-b border-gray-400 transition-colors duration-300"
    >
      NAV
    </nav>
  );
}
