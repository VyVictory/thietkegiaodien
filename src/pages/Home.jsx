import React from 'react'
import Singer from '../components/singer/Singer'
import PlayBack from '../components/music/PlayBack'
export default function Home() {
  const keywords = [
    "dễ ngủ",
    "Nạp năng lượng",
    "Thư giãn",
    "Tập thể dục",
    "Lãng mạn",
    "Vui tươi"
  ]
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Keywords section */}
      <div className="mt-4 mb-8">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {keywords.map((k, index) => (
            <div
              key={index}
              className="bg-[#363D41] hover:bg-[#4c555c] rounded-full flex justify-center items-center px-3 py-1.5 text-sm cursor-pointer transition-colors"
            >
              {k}
            </div>
          ))}
        </div>
      </div>

      {/* Content sections with appropriate spacing */}
      <div className="space-y-8 md:space-y-10 pb-16">
        <PlayBack title={"Tuyển tập nhạc cho bạn"} />
        <Singer title={"Ca sĩ/ Rapper"} />
        <PlayBack title={"Nhạc mới phát hành"} />
        <PlayBack title={"Nhạc Trendding"} />
      </div>
    </div>
  )
}
