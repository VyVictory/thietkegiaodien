import * as React from "react";

export default function Nav() {
  return (
    <>
      <nav className={`bg-black w-full h-full border-b-[1px] border-[#222222]`}>
        NAV
      </nav>{" "}
    </>
  );
}
const scrollCss = () => {
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".Nav");
    if (window.scrollY > 10) {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.75)"; // Màu nền trắng mờ
    } else {
      navbar.style.backgroundColor = "black"; // Màu nền trắng mờ
    }
  });
};
