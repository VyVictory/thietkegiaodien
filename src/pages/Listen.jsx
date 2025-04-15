import React from 'react'
import SimpleList from '../components/playlist/SimpleList'

export default function Listen() {
    return (
        <div className='flex h-[calc(100vh-60px)]'>
            <div>
                <img src="https://i.ytimg.com/vi/BxhmoqsrAKg/maxresdefault.jpg" alt=""
                    className='max-w-2xl'
                />
            </div>
            <div className='grid gap-3'>
                <div className='px-4 my-5 flex justify-between text-center'>
                    <span className='py-3 px-10 border-b-[1px] hover'>Tiếp theo</span>
                    <span className='py-3 px-10 border-b-[1px] border-gray-600'>Lời nhạc</span>
                    <span className='py-3 px-10 border-b-[1px] border-gray-600'>Liên quan</span>
                </div>
                <div className='overflow-auto max-h-[100vh] grid gap-3'>
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                    <SimpleList />
                </div>
            </div>
        </div>
    )
}
