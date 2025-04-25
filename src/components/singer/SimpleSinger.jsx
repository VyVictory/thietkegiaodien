import React from 'react'
import { Link } from 'react-router-dom'

export default function SimpleSinger() {
    return (
        <div className='grid gap-2 '>
            <Link to={`/singer/id`} className='flex flex-col items-center'>
                <img src="https://th.bing.com/th/id/OIP.-7yXfNE9GcUmKxgMVeOhCgHaHa?rs=1&pid=ImgDetMain" alt=""
                    className='rounded-full object-cover aspect-square'
                />
            </Link>
            <Link to={`/singer/id`} className='text-nowrap text-center hover:underline'>Datmaniac</Link>
            <span className='text-[#B4B4B4] text-sm text-center'>5.92N đã đăng ký</span>
        </div>
    )
}
