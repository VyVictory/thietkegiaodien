import React from 'react'
import MyList from '../components/music/MyList'

import ListSinger from '../components/singer/ListSinger'

export default function Libary() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
        <ListSinger />
      </div>
    </div>
  )
}
