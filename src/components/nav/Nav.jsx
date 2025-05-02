import React, { useEffect, useRef, useState } from "react";
import log from "../../assets/logo.png";
import { Search } from "@mui/icons-material";
import { UserDropDow } from "./UserDropDow";
import { Link, useNavigate } from "react-router-dom";
import { useLayout } from "../../context/LayoutProvider";

export default function Nav() {
  const navRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const { setMusicData, setMusicDetail } = useLayout();

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 0) {
        navRef.current.style.backgroundColor = "black";
        navRef.current.style.borderColor = "#404040";
      } else {
        navRef.current.style.backgroundColor = "transparent";
        navRef.current.style.borderColor = "transparent";
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch search results
  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      setIsSearching(true);
      fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=music&limit=10`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.results?.length) {
            setSearchResults(data.results);
          } else {
            setSearchResults([]);
          }
        })
        .catch((err) => console.error("Search failed", err))
        .finally(() => setIsSearching(false));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  // Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full h-[60px] flex items-center justify-between pr-4 border-b border-transparent z-50 transition-colors duration-300 bg-transparent"
    >
      <div className="flex-shrink-0 text-blue-400 font-bold text-xl">
        <Link to={"/"} className="flex-row items-center hidden xl:flex">
          <img src={log} alt="Logo" className="h-16 object-contain" />
          Next To Music
        </Link>
      </div>

      <div
        className="flex-1 px-4 hidden md:flex justify-center relative"
        ref={searchRef}
      >
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2
              bg-gray-800 bg-opacity-50
              border border-gray-600
              text-white placeholder-gray-400
              rounded-full
              focus:outline-none focus:ring-1 focus:ring-blue-500
              transition"
          />

          {searchResults.length > 0 && (
            <ul className="absolute top-full mt-2 left-0 w-full bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg z-50">
              {searchResults.map((track) => (
                <li
                  key={track.trackId}
                  className="flex items-center gap-3 p-2 hover:bg-gray-800 cursor-pointer text-sm text-white transition-all"
                  onClick={() => { 
                    setMusicDetail(track);
                    navigate("/listen/" + track?.collectionId);
                    setSearchResults([]);
                    setSearchTerm("");
                  }}
                >
                  <img
                    src={track.artworkUrl60}
                    alt={track.trackName}
                    className="w-10 h-10 rounded"
                  />
                  <div className="flex flex-col overflow-hidden">
                    <span className="truncate">{track.trackName}</span>
                    <span className="text-gray-400 truncate text-xs">
                      {track.artistName}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {isSearching && (
            <div className="absolute top-full mt-2 left-0 w-full text-white text-center text-sm">
              Đang tìm kiếm...
            </div>
          )}
        </div>
      </div>

      <UserDropDow />
    </nav>
  );
}
