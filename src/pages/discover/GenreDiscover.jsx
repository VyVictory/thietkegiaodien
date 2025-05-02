// GenreDiscover.js
import React, { useEffect, useState } from "react";
import NewReleasesSection from "./NewReleasesSection"; // component render grid
import { useParams } from "react-router-dom";

const genres = [
  "Pop",
  "Rock",
  "Hip-Hop",
  "Electronic",
  "Country",
  "Latin",
  "Metal",
  "R&B",
  "Jazz",
  "Classical",
];

export default function GenreDiscover() {
  const [tracks, setTracks] = useState([]);
  const { id } = useParams(); // Lấy genre từ URL, ví dụ "rock"
  const [selectedGenre, setSelectedGenre] = useState(decodeURIComponent(id));
  const [loading, setLoading] = useState(false);
  const [moods, setMoods] = useState(genres); // Sử dụng initialMoods
  useEffect(() => {
    if (id) {
      setSelectedGenre(decodeURIComponent(id));
    }
  }, [id]);

  useEffect(() => {
    async function fetchDiscoverData() {
      setLoading(true);
      try {
        // Lấy dữ liệu moods (giữ nguyên logic hiện tại)
        const genreRes = await fetch(
          "https://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=a8cdfc8f1ea7b05842cc73c59f1a7644&format=json"
        );
        const genreData = await genreRes.json();
        const tags = genreData.toptags.tag
          .slice(0, 24)
          .map((tag) => tag.name)
          .filter((tag) => tag.length < 8);
        setMoods(tags);
      } catch (error) {
        console.error("Error loading discover data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDiscoverData();
  }, []);
  // Khi đổi thể loại, fetch từ iTunes
  useEffect(() => {
    async function fetchByGenre() {
      setLoading(true);
      try {
        // iTunes search theo term=genre và media=music
        const res = await fetch(
          `https://itunes.apple.com/search?term=${encodeURIComponent(
            selectedGenre
          )}&media=music&limit=40`
        );
        const data = await res.json();
        const items = data.results.map((item, idx) => ({
          id: item.trackId || idx,
          imageSrc: item.artworkUrl100.replace("100x100", "400x400"),
          title: item.trackName,
          artistName: item.artistName,
          playlistId: item.collectionId,
          artistId: item.artistId,
        }));
        setTracks(items);
      } catch (err) {
        console.error(err);
        setTracks([]); // fallback
      } finally {
        setLoading(false);
      }
    }

    fetchByGenre();
  }, [selectedGenre]);

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Genre Tabs */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {moods.map((g) => (
          <button
            key={g}
            onClick={() => setSelectedGenre(g)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition ${
              g === selectedGenre
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-white text-xl font-semibold">
        {selectedGenre} Hot Tracks
      </h2>

      {/* Music Grid */}
      {loading ? (
        <p className="text-gray-400">Đang tải...</p>
      ) : tracks.length > 0 ? (
        <NewReleasesSection
          isVideo={false}
          items={tracks}
          title={null} // nếu bạn muốn tự render heading
        />
      ) : (
        <p className="text-gray-400">Không tìm thấy kết quả.</p>
      )}
    </div>
  );
}
