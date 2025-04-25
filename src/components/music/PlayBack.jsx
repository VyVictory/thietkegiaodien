import React, { useState, useMemo } from 'react'
import ListMusic from './ListMusic'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'

export default function PlayBack({ title }) {
    // Sample data - replace with your actual data later
    const musicItems = useMemo(() => Array(18).fill(0).map((_, i) => ({
        id: i,
        title: `Song ${i + 1}`,
        // Add other properties your SimpleMusic component might need
    })), []);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(musicItems.length / itemsPerPage);

    const handlePrevious = () => {
        setCurrentPage(prev => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : prev));
    };

    return (
        <div>
            <div className='flex items-center justify-between mb-8'>
                <h1 className='font-semibold text-2xl'>{title}</h1>
                <div className='flex gap-5 items-center'>
                    <button className='p-1 border-2 rounded-3xl hover:bg-gray-800'>Xem tất cả</button>
                    <div className='flex gap-3'>
                        <ArrowBackIosNew
                            sx={{ fontSize: 30 }}
                            className={`border-2 rounded-full p-1 ${currentPage > 0 ? 'hover:bg-gray-800 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                            onClick={handlePrevious}
                        />
                        <ArrowForwardIos
                            sx={{ fontSize: 30 }}
                            className={`border-2 rounded-full p-1 ${currentPage < totalPages - 1 ? 'hover:bg-gray-800 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                            onClick={handleNext}
                        />
                    </div>
                </div>
            </div>
            <ListMusic items={musicItems} currentPage={currentPage} itemsPerPage={itemsPerPage} />
        </div>
    )
}
