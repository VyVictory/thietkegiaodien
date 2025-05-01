import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SimpleMusic from "../../components/music/SimpleMusic";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

export default function NewReleasesSection({ items, title, isVideo }) {
  const scrollRef = useRef(null);
  const scrollOffset = 500;
  const itemsPerScroll = 4; // Cuộn 4 item mỗi lần

  const scroll = (dir) => {
    // if (!scrollRef.current) return;
    // scrollRef.current.scrollBy({
    //   left: dir === "left" ? -scrollOffset : scrollOffset,
    //   behavior: "smooth",
    // });
    if (!scrollRef.current || scrollRef.current.children.length === 0) return;

    // Lấy chiều rộng 1 item (phần tử con đầu tiên)
    const item = scrollRef.current.children[0];
    const itemWidth = item.offsetWidth + 16; // +16 cho khoảng cách (gap)
    const scrollAmount = itemWidth * itemsPerScroll;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl font-semibold">
          {title || "Danh sách đĩa nhạc"}
        </h2>
        <div className="flex items-center space-x-3">
          <Link
            to="/releases"
            className="text-gray-200 border-gray-400 border text-sm  px-3 py-1  hover:bg-gray-700 rounded-lg"
          >
            Xem thêm
          </Link>
          <ArrowBackIosNew
            onClick={() => scroll("left")}
            sx={{ fontSize: 30 }}
            className="cursor-pointer text-white border border-gray-400 rounded-full p-2 hover:bg-gray-700"
            fontSize="small"
          />
          <ArrowForwardIos
            sx={{ fontSize: 30 }}
            onClick={() => scroll("right")}
            className="cursor-pointer text-white border border-gray-400 rounded-full p-2 hover:bg-gray-700"
            fontSize="small"
          />
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
        >
          {!isVideo &&
            items.map((it) => (
              // isVideo ? (
              <div key={it.id} className="min-w-[150px] flex-shrink-0">
                <SimpleMusic
                  imageSrc={it.imageSrc}
                  title={it.title}
                  artistName={it.artistName}
                  playlistId={it.playlistId}
                  artistId={it.artistId}
                />
              </div>
            ))}
          {isVideo &&
            items.map((it) => (
              <Link
                key={it.id}
                to={`/video/${it.id}`}
                className="min-w-[200px] flex-shrink-0"
              >
                <img
                  src={it.img}
                  alt={it.title}
                  className="rounded-md w-full h-32 object-cover"
                />
                <p className="text-white mt-2 truncate">{it.title}</p>
                <p className="text-gray-400 text-sm truncate">
                  {it.artist} • {it.views} lượt xem
                </p>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
