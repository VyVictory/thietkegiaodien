import React from 'react'
import { Link } from 'react-router-dom'

export default function SimpleMusic() {
    return (
        <div className='grid gap-2'>
            <Link to={`/playlist/1`} className='flex flex-col gap-2'>
                <img src="https://th.bing.com/th/id/OIP.-7yXfNE9GcUmKxgMVeOhCgHaHa?rs=1&pid=ImgDetMain" alt=""
                    className='rounded-xl h-44 w-full'
                />
            </Link>
            <Link to={`/playlist/1`} className='text-nowrap hover:underline'>Tuyển tập nhạc EDM</Link>
            <Link to={`/singer/1`} className='text-[#B4B4B4] text-sm hover:underline'>Martin Garrix</Link>
        </div>
    )
}
