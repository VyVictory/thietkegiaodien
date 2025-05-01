import React, { useState } from 'react'
import SimpleMusic from './SimpleMusic'
import Like from '../../assets/like.png'
import { Link } from 'react-router-dom'
import { useLayout } from '../../context/LayoutProvider';
import { PlayIcon } from "lucide-react";
import { MoreVert } from "@mui/icons-material";
export default function MyList() {
    const { setIsPlay } = useLayout();
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 gap-5 md:gap-8'>
                {/* Liked Songs Section */}
                {/* Music Collections Grid */}
                <div className='mt-4'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-6'>
                        <div
                            className="w-[180px] flex-shrink-0 relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="relative rounded-md overflow-hidden">
                                <Link to={`/playlist/like`} className="block">
                                    <img
                                        src={Like} alt="Liked Songs"
                                        className="w-full h-[180px] object-cover"
                                    />
                                </Link>
                                {isHovered && (
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
                                        <button
                                            onClick={() => {
                                                setIsPlay(true);
                                            }}
                                            className="absolute bottom-2 right-2 hover:scale-110 opacity-80 hover:opacity-100 text-white rounded-full p-2 bg-green-500 hover:bg-green-600"
                                        >
                                            <PlayIcon className="w-6 h-6" />
                                        </button>
                                        <div className="absolute top-2 right-2 cursor-pointer hover:scale-125 hover:text-blue-700 transition-all">
                                            <MoreVert className="aspect-square" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-2">
                                <Link
                                    to={`/playlist/like`}
                                    className="truncate hover:underline text-white font-semibold block"
                                >
                                    Danh sách đã thích
                                </Link>
                                <Link
                                    to={`/singer/1`}
                                    className="text-[#B4B4B4] text-sm truncate hover:underline block"
                                >
                                    Hãy thích bài hát để thêm vào danh sách
                                </Link>
                            </div>
                        </div>
                        <SimpleMusic />
                        <SimpleMusic />
                        <SimpleMusic />
                        <SimpleMusic />
                        <SimpleMusic />
                        <SimpleMusic />
                        <SimpleMusic />
                        <SimpleMusic />
                        <SimpleMusic />
                        <SimpleMusic />
                        <SimpleMusic />
                    </div>
                </div>
            </div>
        </div>
    )
}
