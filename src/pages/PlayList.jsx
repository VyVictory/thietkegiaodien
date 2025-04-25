import React from 'react'
import SimpleList from '../components/playlist/SimpleList'
import LeftPlayList from '../components/playlist/LeftPlayList'

export default function PlayList() {
    return (
        <div className='flex mt-16'>
            <div className=' fixed top-50'>
                <LeftPlayList />
            </div>
            <div className='grid gap-7 ml-[350px]'>
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
                <SimpleList wid={`min-w-96`} />
            </div>
        </div>
    )
}
