import React from 'react'
import { PlayCircle, MoreVert, VerticalAlignBottom, ThumbUpAlt } from '@mui/icons-material'
import { useLayout } from '../../context/LayoutProvider';
import { Link } from 'react-router-dom';
import Like from '../../assets/like.png'
export default function LeftWishList() {
    const { setIsPlay } = useLayout()
    return (
        <div className="grid gap-4 md:gap-5 text-center">
            {/* Box Icon Playlist */}
            <div className="w-full sm:max-w-xs md:w-72 h-52 sm:h-56 md:h-64 rounded-lg bg-[#212121] flex justify-center items-center shadow-md mx-auto">
                <img src={Like} alt="like" className='w-full' />
            </div>

            {/* Info Section */}
            <div className="grid gap-2 sm:gap-3">
                {/* Title */}
                <h1 className="font-bold text-2xl sm:text-3xl">Nhạc yêu thích</h1>

                {/* User Info */}
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <img
                        src="https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg"
                        alt="avatar"
                        className="rounded-full w-8 h-8 sm:w-10 sm:h-10 object-cover"
                    />
                    <span className="text-sm sm:text-md">Tên gì vậy ?</span>
                </div>

                {/* Description */}
                <div className="grid text-sm">
                    <span>Danh sách nhạc mà bạn nhấn nút thích sẽ xuất hiện tại đây <ThumbUpAlt /></span>
                </div>

                {/* Button Placeholder */}
                <div className='flex items-center justify-center gap-3 sm:gap-4 mt-2'>
                    <div className='bg-[#1d1d1d] hover:bg-[#353535] p-1 sm:px-2 sm:py-1 rounded-full aspect-square'>
                        <VerticalAlignBottom />
                    </div>
                    <Link
                        to={"/listen/id"}
                        onClick={() => {
                            setIsPlay(true);
                        }}
                    >
                        <PlayCircle sx={{ fontSize: { xs: 50, sm: 65 } }} className="text-white cursor-pointer" />
                    </Link>
                    <div className='bg-[#1d1d1d] hover:bg-[#353535] p-1 sm:px-2 sm:py-1 rounded-full aspect-square'>
                        <MoreVert />
                    </div>
                </div>
            </div>
        </div>
    )
}
