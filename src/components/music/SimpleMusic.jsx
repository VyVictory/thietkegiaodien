import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fr from "../../assets/Fr.png";
import { BarChart3Icon, PlayIcon } from "lucide-react";
import { MoreVert } from "@mui/icons-material";
export default function SimpleMusic() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    fetch("https://itunes.apple.com/search?term=edm&media=music&limit=1001")
      .then((res) => res.json())
      .then((data) => {
        if (data.results?.length) {
          const randomIndex = Math.floor(Math.random() * data.results.length);
          setTrack(data.results[randomIndex]);
        }
      })
      .catch((err) => console.error("Fetch iTunes failed", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-white text-sm">Đang tải...</div>;
  if (!track)
    return <div className="text-white text-sm">Không tìm thấy bài nhạc.</div>;

  const { artworkUrl100, collectionId, trackName, artistName } = track;
  const imgUrl = artworkUrl100?.replace("100x100bb", "300x300bb") || Fr;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-[180px] flex-shrink-0 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative rounded-md overflow-hidden">
        <Link to={`/playlist/${collectionId}`} className="block">
          <img
            src={imgUrl}
            alt={trackName}
            className="w-full h-[180px] object-cover"
          />
        </Link>
        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
            <button className="absolute bottom-2 right-2 hover:scale-110 opacity-80 hover:opacity-100 text-white rounded-full p-2 bg-green-500 hover:bg-green-600">
              <PlayIcon className="w-6 h-6" />
            </button>
            <div className="absolute top-2 right-2 cursor-pointer hover:scale-125 hover:text-blue-700 transition-all">
              <MoreVert className="aspect-square" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-2">
        <Link
          to={`/playlist/${collectionId || "0"}`}
          className="truncate hover:underline text-white font-semibold block"
        >
          {trackName || "Tuyển tập nhạc EDM"}
        </Link>
        <Link
          to={`/singer/${encodeURIComponent(artistName) || "Martin Garrix"}`}
          className="text-[#B4B4B4] text-sm truncate hover:underline block"
        >
          Đĩa đơn • {artistName || "Martin Garrix"}
        </Link>
      </div>
    </div>
  );
}
