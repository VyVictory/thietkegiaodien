import React from 'react'
import SimpleSinger from './SimpleSinger'
import "../../css/Home.css"
export default function ListSinger() {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6'>
            <SimpleSinger />
            <SimpleSinger />
            <SimpleSinger />
            <SimpleSinger />
            <SimpleSinger />
            <SimpleSinger />
        </div>
    )
}
