import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import { Link, useNavigate } from "react-router-dom";

import {
  SkipPrevious,
  PlayArrowRounded,
  PauseRounded,
  SkipNext,
  ThumbUpOutlined,
  ThumbDownAltOutlined,
  VolumeUpRounded,
  VolumeOffRounded,
  MoreVertOutlined,
  Favorite,
  PlaylistAdd,
  Circle,
  ArrowDropUp,
  Cached,
} from "@mui/icons-material";
import Cookies from "js-cookie";
import { Delete, Download } from "lucide-react";
import { useLayout } from "../../context/LayoutProvider";
import shuffleWhite from "../../assets/shuffleW.png";
import { useEffect } from "react";
import { Links } from "react-router-dom";
import MusicPlayer from "./MusicPlayer";
import { useRef } from "react";
export const Play = ({ open }) => {
  const navigate = useNavigate();
  const audioRef = useRef();

  const {
    setIsPlay,
    musicData,
    position,
    setPosition,
    duration,
    setDuration,
    setMusicDetail,
  } = useLayout();

  const [isNext, setIsNext] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [isLike, setLike] = React.useState(0);
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const [anchorElVolume, setAnchorElVolume] = React.useState(null);
  const [volume, setVolume] = React.useState(50);

  const openMenu = Boolean(anchorElMenu);
  const openVolume = Boolean(anchorElVolume);
  useEffect(() => {
    setPosition(0);
  }, [musicData]);
  const handleSliderChange = (_, value) => {
    setPosition(value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };
  useEffect(() => {
    if (!musicData?.trackId) return;
    const likedSongs = Cookies.get("likedSongs");
    const likedSongsObj = likedSongs ? JSON.parse(likedSongs) : {};
    setLike(likedSongsObj[musicData.trackId] || 0);
  }, [musicData?.trackId]);

  const handleMenuClick = (e) => setAnchorElMenu(e.currentTarget);
  const handleCloseMenu = () => setAnchorElMenu(null);

  const handleVolumeClick = (e) => setAnchorElVolume(e.currentTarget);
  const handleCloseVolume = () => setAnchorElVolume(null);
  const handleVolumeChange = (_, val) => setVolume(val);
  const updateLikedSongsCookie = (trackId, likedStatus) => {
    const likedSongs = Cookies.get("likedSongs");
    const likedSongsObj = likedSongs ? JSON.parse(likedSongs) : {};

    if (likedStatus) {
      likedSongsObj[trackId] = likedStatus;
    } else {
      delete likedSongsObj[trackId];
    }

    Cookies.set("likedSongs", JSON.stringify(likedSongsObj), { expires: 7 });
  };

  const handleLike = () => {
    const newLikeStatus = isLike === 1 ? 0 : 1; // Toggle between liked (1) and not liked (0)
    setLike(newLikeStatus);
    console.log("newLikeStatus", newLikeStatus);
    updateLikedSongsCookie(musicData.trackId, newLikeStatus);
  };

  const handleDislike = () => {
    setLike(0);
    updateLikedSongsCookie(musicData.trackId, 0);
  };
  const formatDuration = (v) => {
    const m = Math.floor(v / 60);
    const s = v - m * 60;
    return `${m}:${s < 10 ? `0${s}` : s}`;
  };
  const formatVolume = (v) => `${Math.round(v)}%`;
  const menuItems = [
    {
      icon: <Favorite className="mr-2" />,
      label: "Thêm vào danh sách ưa thích",
    },
    {
      icon: <Download className="mr-2" />,
      label: "Tải về máy",
      name: "download",
    },
    {
      icon: <PlaylistAdd className="mr-2" />,
      label: "Thêm vào PlayList",
    },
    {
      icon: <Delete className="mr-2" />,
      label: "Xóa khỏi hàng đợi",
      name: "delete",
    },
    {
      icon: (
        <ThumbUpOutlined
          onClick={handleLike}
          className={`mr-2 ${isLike === 1 ? "text-blue-500" : ""}`}
        />
      ),
      label: "Thích",
      name: "like",
    },
    {
      icon: (
        <ThumbDownAltOutlined
          onClick={handleDislike}
          className={`mr-2 ${isLike === 2 ? "text-blue-500" : ""}`}
        />
      ),
      label: "Không thích",
      name: "un_like",
    },
  ];
  if (!open) return null;

  return (
    <div className="w-full fixed h-20 bottom-0 left-0  text-white z-30 xl:z-50">
      <div className="bg-stone-900 h-full relative flex flex-col">
        {/* Time Slider */}
        <div className="absolute -top-[13px] w-full">
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={handleSliderChange}
            sx={{
              color: "red",
              height: 4,
              transition: "all 0.3s ease",
              "& .MuiSlider-rail": { bgcolor: "#555", height: 4 },
              "& .MuiSlider-thumb": {
                height: 4,
                width: 4,
                backgroundColor: "red",
                borderRadius: "50%",
                "&:hover": { backgroundColor: "#ff3333" },
                "&.Mui-active": { backgroundColor: "#ff0000" },
              },
              "& .MuiSlider-track": { backgroundColor: "red", height: 4 },
              "&:hover": {
                "& .MuiSlider-thumb": { width: 14, height: 14 },
                "& .MuiSlider-rail, & .MuiSlider-track": { height: 6 },
              },
            }}
          />
        </div>

        {/* Controls Row */}
        <div className="flex items-center h-full pt-2">
          {/* LEFT */}
          <div className="flex-col-reverse flex items-center sm:gap-2 flex-shrink-0 sm:flex sm:flex-row">
            <div>
              <IconButton>
                <SkipPrevious className="text-white" />
              </IconButton>
              <IconButton onClick={() => setPaused(!paused)}>
                {paused || position === duration ? (
                  <PlayArrowRounded
                    className="text-white"
                    sx={{ fontSize: 30 }}
                  />
                ) : (
                  <PauseRounded className="text-white" sx={{ fontSize: 30 }} />
                )}
              </IconButton>
              <IconButton>
                <SkipNext className="text-white" />
              </IconButton>
            </div>
            <Typography className="text-gray-400 text-center text-sm whitespace-nowrap ml-2">
              {formatDuration(position)} / {formatDuration(duration)}
            </Typography>
          </div>

          {/* CENTER */}
          <div className="flex items-center gap-3 flex-1 overflow-hidden  justify-center">
            <Link
              className="mb-2"
              onClick={() => setMusicDetail(musicData)}
              to={`/listen/${encodeURIComponent(musicData?.trackName || "Datmaniac")}`}
            >
              {" "}
              <img
                src={
                  musicData?.artworkUrl100 ||
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=1200&h=-1&s=1"
                }
                alt="Thumbnail"
                className="hidden sm:block h-16 w-16 object-cover rounded flex-shrink-0"
              />
            </Link>
            <div className="flex flex-col overflow-hidden mb-2 gap-3">
              <Link
                onClick={() => setMusicDetail(musicData)}
                to={`/listen/${encodeURIComponent(musicData?.trackName || "Datmaniac")}`}
                className="font-semibold truncate"
              >
                {musicData?.trackName ||
                  ' Nhạc TIK TOK Trung Quốc 2022 " Tuyệt Đỉnh Gây Nghiện " ♫ Top 10 Nhạc EDM'}
              </Link>
              <div className="text-xs text-gray-400 flex items-center gap-1 truncate">
                <Link
                  to={"/singer/" + (musicData?.artistName || "EDM Music")}
                  className="hover:underline cursor-pointer"
                >
                  {musicData?.artistName || "EDM Music"}
                </Link>
                <Circle sx={{ width: "6px" }} />
                <span>439 Tr lượt xem</span>
                <Circle sx={{ width: "6px" }} />
                <span>4,7 Tr lượt thích</span>
              </div>
            </div>{" "}
            <div className="hidden sm:flex gap-1 lg:pl-4">
              <ThumbUpOutlined
                onClick={handleLike}
                className={`${isLike === 1 ? "text-blue-500" : ""} cursor-pointer`}
              />
              <ThumbDownAltOutlined
                onClick={handleDislike}
                className={`${isLike === 2 ? "text-blue-500" : ""} cursor-pointer`}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center ">
            <div className="hidden sm:flex items-center">
              <IconButton onClick={handleVolumeClick}>
                {volume === 0 ? (
                  <VolumeOffRounded className="text-gray-200" />
                ) : (
                  <VolumeUpRounded className="text-gray-200" />
                )}
              </IconButton>
              <Popover
                open={openVolume}
                anchorEl={anchorElVolume}
                onClose={handleCloseVolume}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "bottom", horizontal: "right" }}
                PaperProps={{
                  style: {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    padding: 8,
                    borderRadius: 8,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    overflow: "hidden",
                  },
                }}
              >
                <Box className="h-[160px] flex flex-col items-center justify-center">
                  <Typography className="text-white mb-1">
                    {formatVolume(volume)}
                  </Typography>
                  <Slider
                    orientation="vertical"
                    step={1}
                    min={0}
                    max={100}
                    value={volume}
                    onChange={handleVolumeChange}
                    sx={{
                      color: "red",
                      height: 120,
                      "& .MuiSlider-thumb": {
                        backgroundColor: "red",
                        width: 14,
                        height: 14,
                      },
                      "& .MuiSlider-track": { backgroundColor: "red" },
                      "& .MuiSlider-rail": { bgcolor: "#555" },
                    }}
                  />
                </Box>
              </Popover>{" "}
              <IconButton
                onClick={() => setIsNext(2)}
                className="hidden sm:block"
              >
                <Cached className="text-gray-300" fontSize="medium" />
              </IconButton>
              <IconButton
                onClick={() => {
                  setIsNext(1);
                }}
                className="hidden sm:block"
              >
                <img
                  src={shuffleWhite}
                  alt="Album"
                  className={`w-6 h-6 rounded-full `}
                />
              </IconButton>
            </div>
            {/* More Menu */}
            <IconButton onClick={handleMenuClick}>
              <MoreVertOutlined className="text-gray-400" />
            </IconButton>

            <Menu
              anchorEl={anchorElMenu}
              open={openMenu}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              transformOrigin={{ vertical: "bottom", horizontal: "center" }}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#1c1917",
                  color: "white",
                  borderRadius: 2,
                  border: "1px solid #555",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                },
              }}
            >
              {menuItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={() => {
                    handleCloseMenu();
                    if (item.name === "download") {
                      window.location.href = musicData?.previewUrl;
                    }
                    if (item.name === "like") handleLike();
                    else if (item.name === "un_like") handleDislike();
                    if (item.label === "Xóa khỏi hàng đợi") setIsPlay(false);
                  }}
                  sx={{
                    color: "#cacaca",
                    "&:hover": { backgroundColor: "#333", color: "#fff" },
                  }}
                >
                  {item.icon} {item.label}
                </MenuItem>
              ))}
              <div className="justify-center flex items-center gap-2 sm:hidden">
                <IconButton onClick={handleVolumeClick}>
                  {volume === 0 ? (
                    <VolumeOffRounded className="text-gray-200" />
                  ) : (
                    <VolumeUpRounded className="text-gray-200" />
                  )}
                </IconButton>
                <Popover
                  open={openVolume}
                  anchorEl={anchorElVolume}
                  onClose={handleCloseVolume}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "bottom", horizontal: "right" }}
                  PaperProps={{
                    style: {
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      padding: 8,
                      borderRadius: 8,
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                      overflow: "hidden",
                    },
                  }}
                >
                  <Box className="h-[160px] flex flex-col items-center justify-center">
                    <Typography className="text-white mb-1">
                      {formatVolume(volume)}
                    </Typography>
                    <Slider
                      orientation="vertical"
                      step={1}
                      min={0}
                      max={100}
                      value={volume}
                      onChange={handleVolumeChange}
                      sx={{
                        color: "red",
                        height: 120,
                        "& .MuiSlider-thumb": {
                          backgroundColor: "red",
                          width: 14,
                          height: 14,
                        },
                        "& .MuiSlider-track": { backgroundColor: "red" },
                        "& .MuiSlider-rail": { bgcolor: "#555" },
                      }}
                    />
                  </Box>
                </Popover>
                <IconButton
                  onClick={() => {
                    setIsNext(1);
                  }}
                  className="hidden sm:block"
                >
                  <img
                    src={shuffleWhite}
                    alt="Album"
                    className={`w-6 h-6 rounded-full `}
                  />
                </IconButton>
                <IconButton
                  onClick={() => setIsNext(2)}
                  className="hidden sm:block"
                >
                  <Cached className="text-gray-300" fontSize="medium" />
                </IconButton>
              </div>
            </Menu>
            <MusicPlayer
              musicData={musicData}
              paused={paused}
              ref={audioRef}
              setPosition={setPosition}
              setDuration={setDuration}
            />
            {/* Collapse */}
            <IconButton
              onClick={() => {
                navigate("/listen/" + musicData?.collectionId);
              }}
              className="hidden sm:block"
            >
              <ArrowDropUp className="text-white" fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
