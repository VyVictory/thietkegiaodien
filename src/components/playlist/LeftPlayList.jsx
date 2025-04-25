import React from 'react'
import { PlaylistPlay, PlayCircle, MoreVert, VerticalAlignBottom } from '@mui/icons-material'

export default function LeftPlayList() {

    return (
        <div className="grid gap-5 text-center">
            {/* Box Icon Playlist */}
            <div className="w-72 h-64 rounded-lg bg-[#212121] flex justify-center items-center shadow-md">
                <PlaylistPlay sx={{ fontSize: 75 }} className="text-[#646464]" />
            </div>

            {/* Info Section */}
            <div className="grid gap-3">
                {/* Title */}
                <h1 className="font-bold text-3xl">Tiêu đề nhập</h1>

                {/* User Info */}
                <div className="flex items-center justify-center gap-3">
                    <img
                        src="https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg"
                        alt="avatar"
                        className="rounded-full w-10 h-10 object-cover"
                    />
                    <span className="text-md ">Tên gì vậy ?</span>
                </div>

                {/* Description */}
                <div className="grid">
                    <span>Danh sách tự động • 2025</span>
                    <span> 134 bài hát • Hơn 17 giờ</span>
                </div>

                {/* Button Placeholder */}
                <div className='flex items-center justify-center gap-4'>
                    <div className='bg-[#1d1d1d] hover:bg-[#353535] px-2 py-1 rounded-full aspect-square'>
                        <VerticalAlignBottom />
                    </div>
                    <div>
                        <PlayCircle sx={{ fontSize: 65 }} className="text-white cursor-pointer" />
                    </div>
                    <div className='bg-[#1d1d1d] hover:bg-[#353535] px-2 py-1 rounded-full aspect-square'>
                        <MoreVert />
                    </div>
                </div>
            </div>
        </div>
    )
}
