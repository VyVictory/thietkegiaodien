import { ThumbUpOffAlt, ThumbUpAlt, ThumbDownOffAlt, ThumbDownAlt, PlayArrow } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom';

export default function SimpleList({ wid }) {
    const [like, setLike] = React.useState(false)
    const [dislike, setDislike] = React.useState(false)
    const [hover, setHover] = React.useState(false);
    function handleLike() {
        setLike(!like)
        setDislike(false)
    }

    function handleDislike() {
        setDislike(!dislike)
        setLike(false)
    }
    return (
        <div className='flex gap-4 items-center px-4'>
            <Link to={"/listen/id"}
                className="relative"
                onMouseEnter={() => setHover(true)} // Bật trạng thái hover
                onMouseLeave={() => setHover(false)} // Tắt trạng thái hover
            >
                <img
                    src="https://th.bing.com/th/id/R.1f944c2571edeea4daae61df34a6f033?rik=TTjaOPoYAwL%2fHw&riu=http%3a%2f%2fwww.dafont.com%2fforum%2fattach%2forig%2f5%2f0%2f507496.png%3f1&ehk=cBfFhHOrc4GCk%2bQBSTpD3xgbTY1DdbXkRzGLsIU51zY%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                    className="h-14 w-14 rounded-sm hover:opacity-80"
                />
                {hover && ( // Hiển thị PlayArrow khi hover
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <PlayArrow className="text-white w-14 h-14 hover:cursor-pointer" />
                    </div>
                )}
            </Link>
            <div className={`grid ${wid} h-full`}>
                <Link to={"/listen/id"} className='font-semibold'>Muốn anh đau</Link>
                <div className='text-[#B4B4B4]'>
                    <span className='hover:underline'>Winno</span>
                    <span>, </span>
                    <span className='hover:underline'>Hustlang Robber</span>
                </div>
            </div>

            <button onClick={handleLike}>
                {like ?
                    <ThumbUpAlt className='white' />
                    : <ThumbUpOffAlt className='white' />
                }
            </button>

            <button onClick={handleDislike}>
                {dislike ?
                    <ThumbDownAlt className='white' />
                    : <ThumbDownOffAlt className='white' />
                }
            </button>

            <div>5:23</div>
        </div >
    )
}
