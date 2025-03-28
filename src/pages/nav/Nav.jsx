import * as React from "react";
import NavCss from "../../css/NavCss.css";
import { PlayArrowSharp } from "@mui/icons-material";
export default function Nav() {
  scrollCss();
  return (
    <>
      <nav className={`Nav`}>
        {" "}
        <PlayArrowSharp className="w-2 h-2" />
      </nav>
    </>
  );
}
const scrollCss = () => {
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".Nav");
    if (window.scrollY > 10) {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 1)"; // Màu nền trắng mờ
      navbar.style.backdropFilter = "blur(10px)"; // Hiệu ứng làm mờ nền phía sau
    } else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.75)"; // Màu nền trắng mờ
      navbar.style.backdropFilter = "blur(10px)"; // Hiệu ứng làm mờ nền phía sau
    }
  });
};
