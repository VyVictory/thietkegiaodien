import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewReleasesSection from "./NewReleasesSection";
import mockVideos from "../../json/mockVideos.json";
import { FaMusic, FaChartBar, FaHeadphones } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CustomSelect = ({ options, defaultValue, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false); 
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className="relative w-48">
      {" "}
      {/* Điều chỉnh độ rộng tùy ý */}
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-2 text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        onClick={handleToggle}
      >
        <span>{selectedValue}</span>
        <FaChevronDown
          className={`${isOpen ? "transform rotate-180" : ""} ml-2 transition-transform duration-200`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 z-10 mt-2 bg-gray-700 rounded-md shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              className={`block w-full px-4 py-2 text-white text-left hover:bg-gray-600 focus:outline-none ${
                selectedValue === option.value ? "bg-purple-500" : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const musicGenres = [
  "Pop",
  "J-Pop",
  "Nhạc châu phi",
  "Nhạc theo mùa",
  "Rock",
  "Nhạc Thái Lan",
  "Metal",
  "Phim và nhạc kịch",
  "Country",
  "Electronic",
  "Hip-Hop",
  "Latin",
  // Thêm các thể loại khác của bạn vào đây
];

// Dữ liệu tâm trạng (giữ nguyên cách bạn đang lấy)
const initialMoods = [
  "Buồn",
  "Lãng mạn",
  "Vui",
  "Giận",
  "Tươi vui",
  "Party",
  "Tập luyện",
  "Thư giãn",
];

export default function Discover() {
  const [newReleases, setNewReleases] = useState([]);
  const [moods, setMoods] = useState(initialMoods); // Sử dụng initialMoods
  const [newVideos, setNewVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("releases");
  const [showAllMoods, setShowAllMoods] = useState(false);
  const [showAllGenres, setShowAllGenres] = useState(false);
  const navigate = useNavigate();
  const selectOptions = [
    { value: "Toàn cầu", label: "Toàn cầu" },
    { value: "Việt nam", label: "Việt Nam" },
    { value: "Hoa kỳ", label: "Hoa Kỳ" },
    { value: "Nhật bổn", label: "Nhật Bản" },
  ];

  const handleSelectChange = (value) => {
    console.log("Đã chọn:", value);
    // Thực hiện các hành động khác khi giá trị select thay đổi
  };

  useEffect(() => {
    async function fetchDiscoverData() {
      setLoading(true);
      try {
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

        // Lấy dữ liệu moods (giữ nguyên logic hiện tại)
        const genreRes = await fetch(
          "https://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=a8cdfc8f1ea7b05842cc73c59f1a7644&format=json"
        );
        const genreData = await genreRes.json();
        const tags = genreData.toptags.tag
          .slice(0, 100)
          .map((tag) => tag.name)
          .filter((tag) => tag.length < 100);
        setMoods(tags);

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
    <div className="px-4 py-6">
      {/* Top Buttons */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <button
          onClick={() => setActiveSection("releases")}
          className={`flex items-center px-4 py-2 rounded-md ${
            activeSection === "releases"
              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          <FaMusic className="mr-2" />
          Bản phát hành mới
        </button>
        <button
          onClick={() => setActiveSection("videos")}
          className={`flex items-center px-4 py-2 rounded-md ${
            activeSection === "videos"
              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          <FaChartBar className="mr-2" />
          Bảng xếp hạng
        </button>
        <button
          onClick={() => setActiveSection("moods")}
          className={`flex items-center px-4 py-2 rounded-md ${
            activeSection === "moods"
              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          <FaHeadphones className="mr-2" />
          Tâm trạng và thể loại
        </button>
      </div>

      <section className="space-y-12 mt-6">
        {/* New Releases */}
        {activeSection === "releases" && (
          <section className="space-y-6">
            {loading ? (
              <p className="text-white">Đang tải dữ liệu...</p>
            ) : (
              <>
                <NewReleasesSection
                  isVideo={false}
                  items={newReleases}
                  title="Bản phát hành mới"
                />
                <NewReleasesSection
                  isVideo={false}
                  items={newReleases}
                  title="Video âm nhạc"
                />
                <NewReleasesSection
                  items={newVideos}
                  isVideo={true}
                  title="Video nhạc mới"
                />
              </>
            )}
          </section>
        )}

        {/* New Videos / Charts */}
        {activeSection === "videos" && (
          <section>
            <h2 className="text-white text-xl font-semibold">Bảng xếp hạng</h2>
            <div className="my-4">
              <CustomSelect
                options={selectOptions}
                defaultValue="Toàn cầu"
                onSelect={handleSelectChange}
              />
            </div>
            {loading ? (
              <p className="text-white">Đang tải dữ liệu...</p>
            ) : (
              <NewReleasesSection
                items={newVideos}
                isVideo={true}
                title="Video nhạc hàng đầu"
              />
            )}
          </section>
        )}

        {/* Moods & Genres */}
        {activeSection === "moods" && (
          <section>
            <h2 className="text-white text-xl font-semibold mb-6">
              Tâm trạng và thể loại
            </h2>
            <div className="pl-4">
              <div className="">
                <h3 className="text-gray-400 font-medium mb-3">
                  Tâm trạng và khoảnh khắc
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {(showAllMoods ? moods : moods.slice(0, 18)).map((m, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        navigate(`/discover/${encodeURIComponent(m)}`)
                      }
                      className="w-full text-center text-sm px-3 py-1.5 border border-gray-600 rounded-full text-white hover:border-white cursor-pointer truncate"
                    >
                      {m}
                    </button>
                  ))}
                </div>

                {/* Nút chỉ hiển thị nếu chưa show hết */}
                {!showAllMoods && moods.length > 18 && (
                  <div className="mt-2 text-center">
                    <button
                      onClick={() => setShowAllMoods(true)}
                      className="text-sm text-blue-400 hover:underline"
                    >
                      Xem thêm ▼
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h3 className="text-gray-400 font-medium mb-3">Dòng nhạc</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {(showAllGenres ? musicGenres : musicGenres.slice(0, 18)).map((genre, i) => (
  <button
    key={i}
    onClick={() => navigate(`/discover/${encodeURIComponent(genre)}`)}
    className="w-full text-center text-sm px-3 py-1.5 border border-gray-600 rounded-full text-white hover:border-white cursor-pointer truncate"
  >
    {genre}
  </button>
))}

                </div>

                {/* Nút chỉ hiển thị nếu chưa show hết */}
                {!showAllGenres && musicGenres.length > 18 && (
                  <div className="mt-2 text-center">
                    <button
                      onClick={() => setShowAllGenres(true)}
                      className="text-sm text-blue-400 hover:underline"
                    >
                      Xem thêm ▼
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </section>
    </div>
  );
}
