import React, { useEffect, useState } from "react";
import {
  ThumbUpOffAlt,
  ThumbUpAlt,
  ThumbDownOffAlt,
  ThumbDownAlt,
  PlayArrow,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useLayout } from "../../context/LayoutProvider";

export default function SimpleList({ wid, trackId }) {
  const [track, setTrack] = useState(null);
  const [hover, setHover] = useState(false);
  const { setIsPlay, setMusicData, setMusicDetail } = useLayout();
  // Like/dislike local state
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  // Fetch track info from iTunes Lookup API
  useEffect(() => {
    if (!trackId) return;
    async function fetchTrack() {
      try {
        const res = await fetch(
          `https://itunes.apple.com/lookup?id=${trackId}&media=music`
        );
        const json = await res.json();
        if (json.results && json.results.length > 0) {
          setTrack(json.results[0]);
        }
      } catch (err) {
        console.error("Error fetching track:", err);
      }
    }
    fetchTrack();
  }, [trackId]);

  const handleLike = (e) => {
    e.stopPropagation();
    setLike(!like);
    setDislike(false);
  };
  const handleDislike = (e) => {
    e.stopPropagation();
    setDislike(!dislike);
    setLike(false);
  };

  if (!track) return null;

  const formatMillis = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? `0${s}` : s}`;
  };

  return (
    <div
      onClick={() => setIsPlay(true)}
      className={`flex gap-2 max-h-[64px] sm:gap-4 items-center px-2 sm:px-4 py-1 hover:bg-[#212121] rounded-md transition-colors ${wid}`}
    >
      <Link
        onClick={() => setMusicDetail(track)}
        to={`/listen/${encodeURIComponent(track?.trackName || "Datmaniac")}`}
        className="relative flex-shrink-0"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={track.artworkUrl100}
          alt={track.trackName}
          className="h-10 w-10 sm:h-14 sm:w-14 rounded-sm hover:opacity-80"
        />
        {hover && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <PlayArrow className="text-white w-8 h-8 sm:w-14 sm:h-14 hover:cursor-pointer" />
          </div>
        )}
      </Link>

      <div className="flex-1 min-w-0 overflow-hidden">
        <Link
          to={`/listen/${track.trackId}`}
          className="font-semibold text-sm sm:text-base truncate block"
        >
          {track.trackName}
        </Link>
        <div className="text-[#B4B4B4] text-xs sm:text-sm truncate">
          {track.artistName}
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <button onClick={handleLike} className="hidden sm:block">
          {like ? (
            <ThumbUpAlt className="text-white" />
          ) : (
            <ThumbUpOffAlt className="text-white" />
          )}
        </button>
        <button onClick={handleDislike} className="hidden sm:block">
          {dislike ? (
            <ThumbDownAlt className="text-white" />
          ) : (
            <ThumbDownOffAlt className="text-white" />
          )}
        </button>
        <div className="text-sm text-[#B4B4B4]">
          {formatMillis(track.trackTimeMillis)}
        </div>
      </div>
    </div>
  );
}
