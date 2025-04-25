import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { IconButton } from "@mui/material";
import {
  FastForwardRounded,
  FastRewindRounded,
  PauseRounded,
  PlayArrowRounded,
} from "@mui/icons-material";  
export const Play = ({ open }) => {
  const duration = 300;
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  if (!open) return null;

  return (
    <div className="w-screen bottom-0 left-0 fixed z-[90] text-white">
      <div className="h-20 relative bg-stone-900">
        {/* Slider on top */}
        <div className="absolute -top-[9px] z-50 w-full">
          <Box sx={{ p: 0, m: 0 }}>
            <Slider
              aria-label="time-indicator"
              size="small"
              value={position}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => setPosition(value)}
              sx={{
                color: "red",
                height: 3,
                mt: 0,
                pt: 0,
                "& .MuiSlider-rail": {
                  bgcolor: "gray",
                },
                "& .MuiSlider-thumb": {
                  height: 8,
                  width: 8,
                  backgroundColor: "red",
                },
                "& .MuiSlider-track": {
                  background: "red",
                },
                "&:hover": {
                  "& .MuiSlider-thumb": {
                    width: 10,
                    height: 10,
                  },
                  "& .MuiSlider-rail": {
                    height: 6,
                  },
                  "& .MuiSlider-track": {
                    height: 6,
                  },
                },
              }}
            />
          </Box>
        </div>

        {/* Controls and content */}
        <div className="w-full h-full flex items-center justify-between px-4">
          {/* Left: Controls */}
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& svg": {
                color: "white",
                ...theme.applyStyles("dark", {
                  color: "white",
                }),
              },
            })}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" />
            </IconButton>
            <IconButton
              aria-label={paused ? "play" : "pause"}
              onClick={() => setPaused(!paused)}
            >
              {paused ? (
                <PlayArrowRounded sx={{ fontSize: "3rem" }} />
              ) : (
                <PauseRounded sx={{ fontSize: "3rem" }} />
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" />
            </IconButton>
          </Box>

          {/* Center: Video thumbnail with title & views */}
          <div className="text-center mx-2 flex flex-row items-center">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=1200&h=-1&s=1"
              alt="Thumbnail"
              className="mx-auto w-16 max-h-24 my-1 rounded"
            />
            <div>
              <Typography fontSize="0.8rem" fontWeight={600}>
                Tiêu đề Video
              </Typography>
              <Typography fontSize="0.7rem" sx={{ opacity: 0.6 }}>
                123K lượt xem
              </Typography>
            </div>
            <div> 
            </div>
          </div>

          {/* Right: Time */}
          <div className="text-sm text-right">
            <Typography fontSize="0.75rem">
              {formatDuration(position)} / {formatDuration(duration)}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
