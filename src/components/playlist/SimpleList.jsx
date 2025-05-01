import {
  ThumbUpOffAlt,
  ThumbUpAlt,
  ThumbDownOffAlt,
  ThumbDownAlt,
  PlayArrow,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { useLayout } from "../../context/LayoutProvider";

export default function SimpleList({ wid }) {
  const [like, setLike] = React.useState(false);
  const [dislike, setDislike] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const { setIsPlay } = useLayout();
  function handleLike() {
    setLike(!like);
    setDislike(false);
  }

  function handleDislike() {
    setDislike(!dislike);
    setLike(false);
  }

  return (
    <div onClick={() => {
      setIsPlay(true);
    }} className="flex gap-2 sm:gap-4 items-center px-2 sm:px-4 py-1 hover:bg-[#212121] rounded-md transition-colors">
      <Link
        to={"/listen/id"}
        className="relative flex-shrink-0"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src="https://th.bing.com/th/id/R.1f944c2571edeea4daae61df34a6f033?rik=TTjaOPoYAwL%2fHw&riu=http%3a%2f%2fwww.dafont.com%2fforum%2fattach%2forig%2f5%2f0%2f507496.png%3f1&ehk=cBfFhHOrc4GCk%2bQBSTpD3xgbTY1DdbXkRzGLsIU51zY%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="h-10 w-10 sm:h-14 sm:w-14 rounded-sm hover:opacity-80"
        />
        {hover && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <PlayArrow className="text-white w-8 h-8 sm:w-14 sm:h-14 hover:cursor-pointer" />
          </div>
        )}
      </Link>

      <div className={`${wid} flex-1 min-w-0 overflow-hidden`}>
        <Link to={"/listen/id"} className="font-semibold text-sm sm:text-base truncate block">
          Muốn anh đau
        </Link>
        <div className="text-[#B4B4B4] text-xs sm:text-sm truncate">
          <Link to={`/singer/1`} className="hover:underline">Winno</Link>
          <span>, </span>
          <Link to={`/singer/1`} className="hover:underline">Hustlang Robber</Link>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <button onClick={handleLike} className="hidden sm:block">
          {like ? (
            <ThumbUpAlt className="white" />
          ) : (
            <ThumbUpOffAlt className="white" />
          )}
        </button>

        <button onClick={handleDislike} className="hidden sm:block">
          {dislike ? (
            <ThumbDownAlt className="white" />
          ) : (
            <ThumbDownOffAlt className="white" />
          )}
        </button>

        <div className="text-sm text-[#B4B4B4]">5:23</div>
      </div>
    </div>
  );
}
