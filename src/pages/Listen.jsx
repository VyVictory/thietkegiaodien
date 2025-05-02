import React from "react";
import TabsList from "../components/TabsList";
import { useLayout } from "../context/LayoutProvider";
import { PlayIcon } from "lucide-react";

export default function Listen() {
  const { musicData, setMusicData, isPlay, setIsPlay, musicDetail } =
    useLayout();
  const [focusTab, setFoucusTab] = React.useState("mp3");
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imgSrc =
    musicDetail?.artworkUrl100 ||
    musicData?.artworkUrl100 ||
    "https://i.ytimg.com/vi/BxhmoqsrAKg/maxresdefault.jpg";

  return (
    <div
      className={`flex ${isPlay ? "mb-12" : ""} flex-col md:flex-row h-full md:h-screen mt-5 md:mt-10 gap-5 md:gap-14 px-2 py-3 overflow-y-auto md:overflow-hidden`}
    >
      <div className="w-full md:w-[52%] md:flex-shrink-0">
        {/* Tabs */}
        <div className="my-3 flex justify-center">
          <div className="bg-[#212121] rounded-full flex items-center">
            <button
              onClick={() => setFoucusTab("mp3")}
              className={`rounded-full ${
                focusTab === "mp3" ? "bg-[#383838]" : ""
              } py-2 px-5`}
            >
              Bài hát
            </button>
            <button
              onClick={() => setFoucusTab("video")}
              className={`rounded-full ${
                focusTab === "video" ? "bg-[#383838]" : ""
              } py-2 px-5`}
            >
              Video
            </button>
          </div>
        </div>

        {/* Image with hover Play icon */}
        <div
          className="relative rounded-lg overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            setMusicData(musicDetail);
            setIsPlay(true);
          }}
        >
          <img
            src={imgSrc}
            alt="Music Thumbnail"
            className="w-full object-cover max-h-[300px] md:max-h-[400px] rounded-lg"
          />

          {isHovered && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
              <button
                className="text-white bg-green-500 hover:bg-green-600 p-4 rounded-full hover:scale-110 transition-transform"
              >
                <PlayIcon className="w-8 h-8" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* TabsList content */}
      <div className="w-full md:w-[48%]">
        <TabsList />
      </div>
    </div>
  );
}
