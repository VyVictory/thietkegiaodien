import React from 'react'
import ListSinger from './ListSinger'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
export default function Singer({ title }) {
    return (
        <div>
            <div className='flex items-center justify-between mb-8'>
                <h1 className='font-semibold text-2xl'>{title}</h1>
                <div className='flex gap-5 items-center'>
                    <div className='p-1 border-2 rounded-3xl'>Xem tất cả</div>
                    <div className='flex gap-3'>
                        <ArrowBackIosNew sx={{ fontSize: 30 }} className='border-2 rounded-full p-1' />
                        <ArrowForwardIos sx={{ fontSize: 30 }} className='border-2 rounded-full p-1' />
                    </div>
                </div>
            </div>
            <ListSinger />
        </div>
    )
}
