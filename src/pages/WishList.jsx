import React from 'react'
import SimpleList from '../components/playlist/SimpleList'
import LeftPlayList from '../components/playlist/LeftPlayList'
import LeftWishList from '../components/WishList/LeftWishList'

export default function WishList() {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='px-4 sm:px-6 lg:px-8 xl:px-24 mt-16'>
            {/* Responsive container with flex direction column on small screens and row on medium+ */}
            <div className='flex flex-col md:flex-row gap-8'>
                {/* Left sidebar - full width on small screens, fixed position on md+ */}
                <div className='w-full md:w-72 lg:w-80 md:sticky md:top-20 mb-8 md:mb-0'>
                    <LeftWishList />
                </div>

                {/* Song list container - adjusts width based on screen size */}
                <div className='w-full md:flex-1 grid gap-4 md:gap-6'>
                    {Array(16).fill().map((_, index) => (
                        <SimpleList key={index} wid={`w-full`} />
                    ))}
                </div>
            </div>
        </div>
    )
}
