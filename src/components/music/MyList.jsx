import React from 'react'
import SimpleMusic from './SimpleMusic'
import Like from '../../assets/like.png'
import { Link } from 'react-router-dom'
export default function MyList() {
    return (
        <Link to={'/playlist'} className='Grid'>
            <div className='grid gap-2'>
                <img src={Like} alt=""
                    className='rounded-xl w-full h-44'
                />
                <span className='text-nowrap'>Danh sách đã thích</span>
                <span className='text-[#B4B4B4] text-sm'>Hãy thích bài hát để thêm vào danh sách</span>
            </div>
            <SimpleMusic />
            <SimpleMusic />
            <SimpleMusic />
            <SimpleMusic />
            <SimpleMusic />
        </Link>
    )
}
