import React from 'react'
import MyList from '../components/music/MyList'
import PlayBack from '../components/music/PlayBack'
import ListMusic from '../components/music/ListMusic'
import ListSinger from '../components/singer/ListSinger'

export default function Libary() {
  return (
    <div className='m-10'>
      <div className='flex'>
        <button className='border-b-2 px-3'>
          <span>THƯ VIỆN</span>
        </button>
        <button>
          <span className='text-[#71717A] '>NỘI DUNG TẢI XUỐNG</span>
        </button>
      </div>
      <div className='font-bold text-2xl my-5'>Nhạc của tôi</div>
      <div className='grid gap-5 '>
        <MyList />
        <ListMusic />
        <ListSinger />
      </div>
    </div>
  )
}
