import React from "react";
import {
  SlowMotionVideo,
  Home,
  Subscriptions,
  CreateNewFolder,
  ThumbUpAlt,
  PlayCircle,
  QueueMusicTwoTone,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
export default function SideBar() {
  const location = useLocation();
  const isActiveTab = (path) => location.pathname === path;
  return (
    <div className="p-2 w-full h-full ">
      <div className="pb-10 border-b-[1px]">
        <Link
          to={"/"}
          className={` p-4 flex items-center gap-5 rounded-md ${isActiveTab("/") ? "bg-[#1D1D1D]" : "hover:bg-[#353535]"}`}
        >
          <Home />
          <span>Trang chủ</span>
        </Link>
        <Link
          to={"discover"}
          className={` p-4 flex items-center gap-5 rounded-md ${isActiveTab("/discover") ? "bg-[#1D1D1D]" : "hover:bg-[#353535]"}`}
        >
          <SlowMotionVideo />
          <span>Khám phá</span>
        </Link>
        <Link
          to={"libary"}
          className={` p-4 flex items-center gap-5 rounded-md ${isActiveTab("/libary") ? "bg-[#1D1D1D]" : "hover:bg-[#353535]"}`}
        >
          <Subscriptions />
          <span>Thư viện</span>
        </Link>
      </div>
      <div className="mt-3 grid gap-5">
        <div className="p-2 flex items-center justify-center gap-2 rounded-3xl bg-[#1D1D1D]">
          <CreateNewFolder />
          <span>Danh sách phát mới</span>
        </div>
        <div className="p-4 flex items-center gap-2 rounded-md  ">
          <ThumbUpAlt />
          <span>Nhạc đã thích</span>
          <PlayCircle sx={{ fontSize: 45 }} />
        </div>
        <div className="p-4 flex items-center gap-2 rounded-md  ">
          <QueueMusicTwoTone />
          <span>Danh sách phát nhạc</span>
        </div>
      </div>
    </div>
  );
}