import React, { useEffect, useRef } from 'react'
import SimpleMusic from './SimpleMusic'
import "../../css/Home.css"

export default function ListMusic({ items = [], currentPage = 0, itemsPerPage = 6 }) {
    // Calculate which items to display based on current page
    const containerRef = useRef(null);

    useEffect(() => {
        // Apply the animation when current page changes
        if (containerRef.current) {
            containerRef.current.style.transition = 'transform 0.4s ease-in-out';
            containerRef.current.style.transform = `translateX(-${currentPage * 100}%)`;
        }
    }, [currentPage]);

    // Style for the container
    const sliderStyle = {
        display: 'flex',
        width: '100%',
        transition: 'transform 0.4s ease-in-out',
        transform: `translateX(-${currentPage * 100}%)`,
    };

    // Style for each page
    const pageStyle = {
        minWidth: '100%',
        flexShrink: 0,
    };

    // Generate pages of items
    const pages = [];
    for (let i = 0; i < Math.ceil(items.length / itemsPerPage); i++) {
        const pageItems = items.slice(i * itemsPerPage, (i + 1) * itemsPerPage);
        pages.push(pageItems);
    }

    return (
        <div className="overflow-hidden max-w-5xl mx-auto">
            <div ref={containerRef} style={sliderStyle}>
                {pages.length > 0 ?
                    pages.map((pageItems, pageIndex) => (
                        <div key={pageIndex} style={pageStyle}>
                            <div className='Grid max-w-5xl mx-auto'>
                                {pageItems.map((item, index) => (
                                    <SimpleMusic key={`${pageIndex}-${index}`} {...item} />
                                ))}
                                {/* Fill empty spaces if needed */}
                                {pageItems.length < itemsPerPage &&
                                    Array(itemsPerPage - pageItems.length).fill(0).map((_, idx) => (
                                        <div key={`empty-${idx}`} className="invisible">
                                            <SimpleMusic />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                    :
                    <div style={pageStyle}>
                        <div className='Grid max-w-7xl mx-auto'>
                            {Array(6).fill(0).map((_, index) => (
                                <SimpleMusic key={index} />
                            ))}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
