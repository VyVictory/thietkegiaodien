import React from 'react'
import { Link } from 'react-router-dom'

export default function SimpleMusic() {
    return (
        <div className='grid gap-2'>
            <Link to={`/playlists/1`} className='flex flex-col gap-2'>
                <img src="https://th.bing.com/th/id/R.1f944c2571edeea4daae61df34a6f033?rik=TTjaOPoYAwL%2fHw&riu=http%3a%2f%2fwww.dafont.com%2fforum%2fattach%2forig%2f5%2f0%2f507496.png%3f1&ehk=cBfFhHOrc4GCk%2bQBSTpD3xgbTY1DdbXkRzGLsIU51zY%3d&risl=&pid=ImgRaw&r=0" alt=""
                    className='rounded-xl h-44 w-full'
                />
            </Link>
            <Link to={`/playlists/1`} className='text-nowrap hover:underline'>Tuyển tập nhạc EDM</Link>
            <Link to={`/singer/1`} className='text-[#B4B4B4] text-sm hover:underline'>Martin Garrix</Link>
        </div>
    )
}
