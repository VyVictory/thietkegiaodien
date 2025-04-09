import React from 'react'
import MyList from '../components/music/MyList'

export default function Libary() {
  return (
    <div>
      <div className='flex gap-1'>
        <button className='border-b-2'>
          <span>THƯ VIỆN</span>
        </button>
        <button>
          <span>NỘI DUNG TẢI XUỐNG</span>
        </button>
      </div>
      <div className='font-bold text-2xl my-5'>Nhạc của tôi</div>
      <MyList />
    </div>
  )
}
