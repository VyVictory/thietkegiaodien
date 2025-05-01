import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewReleasesSection from "./NewReleasesSection";
import mockVideos from "../../json/mockVideos.json"; // Import mock videos

export default function Discover() {
  const [newReleases, setNewReleases] = useState([]);
  const [moods, setMoods] = useState([]);
  const [newVideos, setNewVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDiscoverData() {
      setLoading(true);
      try {
        // 1. Fetch new releases (iTunes)
        const musicRes = await fetch(
          "https://itunes.apple.com/search?term=edm&media=music&limit=60"
        );
        const musicData = await musicRes.json();
        const releases = musicData.results.slice(0, 60).map((item, index) => ({
          id: item.trackId || index,
          imageSrc: item.artworkUrl100.replace("100x100", "400x400"),
          title: item.trackName,
          artistName: item.artistName,
          playlistId: item.collectionId || `playlist-${index}`,
          artistId: item.artistId || `artist-${index}`,
        }));
        setNewReleases(releases);

        // 2. Fetch moods (Last.fm top tags)
        const genreRes = await fetch(
          "https://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=a8cdfc8f1ea7b05842cc73c59f1a7644&format=json"
        );
        const genreData = await genreRes.json();
        const tags = genreData.toptags.tag
          .slice(0, 24) // giới hạn số lượng
          .map((tag) => tag.name)
          .filter((tag) => tag.length < 20); // loại bỏ tag quá dài
        setMoods(tags);

        // 3. Mock videos (imported from mockVideos.json)
        setNewVideos(mockVideos);
      } catch (error) {
        console.error("Error loading discover data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDiscoverData();
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

      {/* New Releases */}
      <section>
        {loading ? (
          <p className="text-white">Đang tải dữ liệu...</p>
        ) : (
          <NewReleasesSection
            isVideo={false}
            items={newReleases}
            title="Đĩa đơn và đĩa nhạc mới"
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
        {loading ? (
          <p className="text-white">Đang tải dữ liệu...</p>
        ) : (
          <NewReleasesSection
            items={newVideos}
            isVideo={true}
            title=" Video nhạc mới"
          />
        )}
      </section>
    </div>
  );
}
