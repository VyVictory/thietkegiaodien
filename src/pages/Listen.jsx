import React from 'react'
// import SimpleList from '../components/playlist/SimpleList'
import TabsList from '../components/TabsList'

export default function Listen() {
    const [focusTab, setFoucusTab] = React.useState("mp3")
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='flex h-screen mt-10 gap-14 px-2 py-3 overflow-hidden'>
            <div className='flex-shrink-0 w-[52%]'>
                <div className='my-3 flex justify-center'>
                    <div className='bg-[#212121] rounded-full flex items-center'>
                        <button onClick={(e) => setFoucusTab("mp3")} className={`rounded-full ${focusTab === "mp3" ? "bg-[#383838]" : ""} py-2 px-5`}>Bài hát</button>
                        <button onClick={(e) => setFoucusTab("video")} className={`rounded-full ${focusTab === "video" ? "bg-[#383838]" : ""} py-2 px-5`}>Video</button>
                    </div>
                </div>
                <img src="https://i.ytimg.com/vi/BxhmoqsrAKg/maxresdefault.jpg" alt=""
                    className='w-full object-cover max-h-[500px]'
                />
            </div>

            <TabsList />
        </div>
    )
}
