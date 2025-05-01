import React, { useState, useMemo, useEffect } from 'react'
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
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Adjust items per page based on screen size
        if (windowWidth < 640) { // sm
            setItemsPerPage(2);
        } else if (windowWidth < 768) { // md
            setItemsPerPage(3);
        } else if (windowWidth < 1024) { // lg
            setItemsPerPage(4);
        } else {
            setItemsPerPage(6);
        }
        // Reset to first page when screen size changes
        setCurrentPage(0);
    }, [windowWidth]);

    const totalPages = Math.ceil(musicItems.length / itemsPerPage);

    const handlePrevious = () => {
        setCurrentPage(prev => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : prev));
    };

    return (
        <div>
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-8 gap-3 sm:gap-0'>
                <h1 className='font-semibold text-xl sm:text-2xl'>{title}</h1>
                <div className='flex flex-wrap gap-3 sm:gap-5 items-center'>
                    <button className='p-1 text-sm border-2 rounded-3xl hover:bg-gray-800'>Xem tất cả</button>
                    <div className='flex gap-2 sm:gap-3'>
                        <ArrowBackIosNew
                            sx={{ fontSize: { xs: 24, sm: 30 } }}
                            className={`border-2 rounded-full p-1 ${currentPage > 0 ? 'hover:bg-gray-800 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                            onClick={handlePrevious}
                        />
                        <ArrowForwardIos
                            sx={{ fontSize: { xs: 24, sm: 30 } }}
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
