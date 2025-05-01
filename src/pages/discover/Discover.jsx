import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewReleasesSection from "./NewReleasesSection";

export default function Discover() {
  const [newReleases, setNewReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  const moods = [
    "Vui vẻ",
    "Buồn",
    "Yêu đời",
    "EDM",
    "Hip-Hop",
    "Lofi",
    "K-pop",
    "Ballad",
    "Rock",
    "Dance",
    "Acoustic",
    "Chill",
  ];

  const newVideos = [
    {
      id: "vid1",
      img: "https://i.ytimg.com/vi/IcrbM1l_BoI/hqdefault.jpg",
      title: "Waiting For Love",
      artist: "Avicii",
      views: "125 triệu",
    },
    {
      id: "vid2",
      img: "https://i.ytimg.com/vi/6Mgqbai3fKo/hqdefault.jpg",
      title: "Scared to Be Lonely",
      artist: "Martin Garrix",
      views: "90 triệu",
    },
    {
      id: "vid3",
      img: "https://i.ytimg.com/vi/IxxstCcJlsc/hqdefault.jpg",
      title: "Clarity",
      artist: "Zedd",
      views: "210 triệu",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://itunes.apple.com/search?term=edm&media=music&limit=1001"
        );
        const data = await response.json();

        // Lấy 6 item đầu tiên làm demo
        const items = data.results.slice(0, 60).map((item, index) => ({
          id: item.trackId || index,
          imageSrc: item.artworkUrl100.replace("100x100", "400x400"),
          title: item.trackName,
          artistName: item.artistName,
          playlistId: item.collectionId || `playlist-${index}`,
          artistId: item.artistId || `artist-${index}`,
        }));

        setNewReleases(items);
      } catch (error) {
        console.error("Error fetching new releases:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="px-4 py-6 space-y-12">
      {/* Top Buttons */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Bản phát hành mới
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Bảng xếp hạng
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Tâm trạng và thể loại
        </button>
      </div> 
      <section>
        {loading ? (
          <p className="text-white">Đang tải dữ liệu...</p>
        ) : (
          <NewReleasesSection
            items={newReleases}
            title={"Đĩa đơn và đĩa nhạc mới"}
          />
        )}
      </section>

      {/* Moods & Genres */}
      <section>
        <h2 className="text-white text-xl font-semibold mb-4">
          Tâm trạng và thể loại
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {moods.map((m, i) => (
            <span
              key={i}
              className="text-center text-sm px-2 py-1 border border-gray-600 rounded-full text-white hover:border-white cursor-pointer truncate"
            >
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* New Videos */}
      <section>
        <h2 className="text-white text-xl font-semibold mb-4">
          Video nhạc mới
        </h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {newVideos.map((v) => (
            <Link
              key={v.id}
              to={`/video/${v.id}`}
              className="min-w-[200px] flex-shrink-0"
            >
              <img
                src={v.img}
                alt={v.title}
                className="rounded-md w-full h-32 object-cover"
              />
              <p className="text-white mt-2 truncate">{v.title}</p>
              <p className="text-gray-400 text-sm truncate">
                {v.artist} • {v.views} lượt xem
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
