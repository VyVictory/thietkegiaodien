import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fr from "../../assets/Fr.png";

export default function SimpleMusic() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

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
  if (!track) return <div className="text-white text-sm">Không tìm thấy bài nhạc.</div>;

  const { artworkUrl100, collectionId, trackName, artistName } = track;
  const imgUrl = artworkUrl100.replace("100x100bb", "300x300bb");

  return (
    <div className="w-[180px] flex-shrink-0">
      <Link to={`/playlist/${collectionId}`} className="block mb-2">
        <img
          src={imgUrl || Fr}
          alt={trackName}
          className="rounded-md w-full h-[180px] object-cover"
        />
      </Link>
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
  );
}
