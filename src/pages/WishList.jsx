import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import SimpleList from "../components/playlist/SimpleList";
import LeftPlayList from "../components/playlist/LeftPlayList";
import LeftWishList from "../components/WishList/LeftWishList";

export default function WishList() {
  const [likedTrackIds, setLikedTrackIds] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    // Load liked song IDs from cookie
    const likedSongs = Cookies.get("likedSongs");
    const likedSongsObj = likedSongs ? JSON.parse(likedSongs) : {};
    // Extract track IDs as array
    const ids = Object.keys(likedSongsObj);
    setLikedTrackIds(ids);
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-24 mt-16">
      {/* Responsive container with flex direction column on small screens and row on medium+ */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left sidebar - full width on small screens, fixed position on md+ */}
        <div className="w-full md:w-72 lg:w-80 md:sticky md:top-20 mb-8 md:mb-0">
          <LeftWishList />
        </div>

        {/* Song list container - adjusts width based on screen size */}
        <div className="w-full md:flex-1 grid gap-4 md:gap-6">
          {likedTrackIds.length > 0 ? (
            likedTrackIds.map((trackId) => (
              <SimpleList key={trackId} trackId={trackId} wid="w-full" />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              Bạn chưa có bài hát yêu thích nào.
            </div>
          )}
          {Array(4)
            .fill()
            .map((_, index) => (
              <SimpleList  key={index} trackId={1097367606} wid={`w-full`} />
            ))}
        </div>
      </div>
    </div>
  );
}
