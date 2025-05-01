import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";

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
  ExpandLessRounded,
  Favorite,
  PlaylistAdd,
  Circle,
} from "@mui/icons-material";
import { Delete, DotIcon } from "lucide-react";
import { useLayout } from "../../context/LayoutProvider";

export const Play = ({ open }) => {
  const duration = 300;
  const { setIsPlay } = useLayout();
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  const [isLike, setLike] = React.useState(0);
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const [anchorElVolume, setAnchorElVolume] = React.useState(null);
  const [volume, setVolume] = React.useState(50);

  const openMenu = Boolean(anchorElMenu);
  const openVolume = Boolean(anchorElVolume);

  const menuItems = [
    {
      icon: <Favorite className="mr-2" />,
      label: "Thêm vào danh sách ưa thích",
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
          className={`mr-2 ${isLike === 1 ? "text-blue-500" : ""}`}
        />
      ),
      label: "Thích",
      name: "like",
    },
    {
      icon: (
        <ThumbDownAltOutlined
          className={`mr-2 ${isLike === 2 ? "text-blue-500" : ""}`}
        />
      ),
      label: "Không thích",
      name: "un_like",
    },
  ];

  const handleMenuClick = (e) => setAnchorElMenu(e.currentTarget);
  const handleCloseMenu = () => setAnchorElMenu(null);

  const handleVolumeClick = (e) => setAnchorElVolume(e.currentTarget);
  const handleCloseVolume = () => setAnchorElVolume(null);
  const handleVolumeChange = (_, val) => setVolume(val);

  const formatDuration = (v) => {
    const m = Math.floor(v / 60);
    const s = v - m * 60;
    return `${m}:${s < 10 ? `0${s}` : s}`;
  };
  const formatVolume = (v) => `${Math.round(v)}%`;

  if (!open) return null;

  return (
    <div className="w-full fixed h-20 bottom-0 left-0 z-90 text-white z-50">
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
            onChange={(_, v) => setPosition(v)}
            sx={{
              color: "red",
              height: 4,
              "& .MuiSlider-rail": { bgcolor: "#555", height: 4 },
              "& .MuiSlider-thumb": {
                height: 12,
                width: 12,
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
                {paused ? (
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
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=1200&h=-1&s=1"
              alt="Thumbnail"
              className="hidden sm:block h-14 w-16 object-cover rounded flex-shrink-0"
            />
            <div className="flex flex-col overflow-hidden mb-2 gap-3">
              <span className="font-semibold truncate">
                Nhạc TIK TOK Trung Quốc 2022 " Tuyệt Đỉnh Gây Nghiện " ♫ Top 10
                Nhạc EDM
              </span>
              <div className="text-xs text-gray-400 flex items-center gap-1 truncate">
                <span className="hover:underline cursor-pointer">Khalid</span>
                <Circle sx={{ width: "6px" }} />
                <span>439 Tr lượt xem</span>
                <Circle sx={{ width: "6px" }} />
                <span>4,7 Tr lượt thích</span>
              </div>
            </div>{" "}
            <div className="hidden sm:flex gap-1 lg:pl-4">
              <ThumbUpOutlined
                onClick={() => setLike(isLike === 1 ? 0 : 1)}
                className={`${isLike === 1 ? "text-blue-500" : ""} cursor-pointer`}
              />
              <ThumbDownAltOutlined
                onClick={() => setLike(isLike === 2 ? 0 : 2)}
                className={`${isLike === 2 ? "text-blue-500" : ""} cursor-pointer`}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center ">
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

                    if (item.name === "like") setLike(isLike === 1 ? 0 : 1);
                    else if (item.name === "un_like")
                      setLike(isLike === 2 ? 0 : 2);
                    else if (item.label === "Xóa khỏi hàng đợi")
                      setIsPlay(false); // 👈 Thêm dòng này
                  }}
                  sx={{
                    color: "#cacaca",
                    "&:hover": { backgroundColor: "#333", color: "#fff" },
                  }}
                >
                  {item.icon} {item.label}
                </MenuItem>
              ))}
            </Menu>

            {/* Collapse */}
            <IconButton className="hidden sm:block">
              <ExpandLessRounded className="text-gray-400" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
