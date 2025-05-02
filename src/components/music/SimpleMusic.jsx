import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Fr from "../../assets/Fr.png";
import { PlayIcon } from "lucide-react";
import { MoreVert } from "@mui/icons-material";
import { useLayout } from "../../context/LayoutProvider";

export default function SimpleMusic() {
  const { id } = useParams();
  const name = id || null;
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setIsPlay, setMusicData, setMusicDetail } = useLayout();
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

  return (
    <div
      className="w-[180px] flex-shrink-0 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-md overflow-hidden">
        <Link
          onClick={() => setMusicDetail(track)}
          to={`/listen/${encodeURIComponent(trackName || "Datmaniac")}`}
          className="block"
        >
          <img
            src={imgUrl}
            alt={trackName}
            className="w-full h-[180px] object-cover"
          />
        </Link>

        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-10 pointer-events-none">
            <button
              onClick={() => {
                setIsPlay(true);
                setMusicData(track);
              }}
              className="absolute bottom-2 right-2 pointer-events-auto hover:scale-110 opacity-80 hover:opacity-100 text-white rounded-full p-2 bg-green-500 hover:bg-green-600"
            >
              <PlayIcon className="w-6 h-6" />
            </button>
            <div className="absolute top-2 right-2 pointer-events-auto cursor-pointer hover:scale-125 hover:text-blue-700 transition-all">
              <MoreVert className="aspect-square" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-2">
        <Link
          to={`/listen/${encodeURIComponent(trackName || "Datmaniac")}`}
          className="truncate hover:underline text-white font-semibold block"
        >
          {trackName || "Tuyển tập nhạc EDM"}
        </Link>
        <Link
          to={`/singer/${encodeURIComponent(artistName) || "Martin Garrix"}`}
          className="text-[#B4B4B4] text-sm truncate hover:underline block"
        >
          Đĩa đơn • {name || artistName || "Martin Garrix"}
        </Link>
      </div>
    </div>
  );
}
