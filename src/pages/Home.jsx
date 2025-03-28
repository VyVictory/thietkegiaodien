import React from 'react'
import PlayBack from './components/music/PlayBack'
import Singer from './components/single/Singer'
export default function Home() {
  const keywords = [
    "dễ ngủ",
    "Nạp năng lượng",
    "Thư giãn",
    "Tập thể dục",
    "Lãng mạn",
    "Vui tươi"
  ]
  return (
    <div className='mx-10 grid gap-10'>
      <div className='Grid'>
        {keywords.map((k) => (
          <div className='bg-[#363D41] rounded-2xl flex justify-center items-center p-1'>{k}</div>
        ))}
      </div>
      <PlayBack title={"Tuyển tập nhạc cho bạn"} />
      <Singer title={"Ca sĩ/ Rapper"} />
      <PlayBack title={"Nhạc mới phát hành"} />
      <PlayBack title={"Nhạc Trendding"} />
    </div>
  )
}
