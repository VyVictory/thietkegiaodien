import React, { useState } from 'react'
import MyList from '../components/music/MyList'
import ListSinger from '../components/singer/ListSinger'

export default function Libary() {
  const [activeTab, setActiveTab] = useState('library')

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-full max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pb-20'>
      <div className='flex mb-6 sticky top-0 z-10 pt-4 pb-2'>
        <button
          className={`px-4 py-2 font-medium transition-all ${activeTab === 'library' ? 'border-b-2  text-white' : 'text-[#71717A] hover:text-black'}`}
          onClick={() => setActiveTab('library')}
        >
          <span>THƯ VIỆN</span>
        </button>
        <button
          className={`px-4 py-2 font-medium transition-all ${activeTab === 'downloads' ? 'border-b-2 text-white' : 'text-[#71717A] hover:text-black'}`}
          onClick={() => setActiveTab('downloads')}
        >
          <span>NỘI DUNG TẢI XUỐNG</span>
        </button>
      </div>

      {activeTab === 'library' ? (
        <>
          <div className='font-bold text-xl md:text-2xl my-5 px-1'>Nhạc của tôi</div>
          <div className='grid gap-6'>
            <MyList />
          </div>
          <div className='mt-10'>
            <div className='font-bold text-xl md:text-2xl my-5 px-1'>Nghệ sĩ</div>
            <ListSinger />
          </div>
        </>
      ) : (
        <div className='flex flex-col items-center justify-center py-20'>
          <div className='text-lg font-medium text-gray-500'>Chưa có nội dung tải xuống nào</div>
        </div>
      )}
    </div>
  )
}
