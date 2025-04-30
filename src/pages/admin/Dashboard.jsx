import React from 'react'
import { Category, Mic, Album, LibraryMusic } from '@mui/icons-material'
import Stat from '../../components/admin/Stat'
export default function Dashboard() {
    return (
        <div className="grid grid-cols-4 gap-6 md:grid-cols-4 sm:grid-cols-1">
            {/* Total Songs Card */}
            <Stat title="Tổng số bài nhạc" total="15 bài" icon={<LibraryMusic fontSize='large' className="text-gray-500" />} />

            {/* Total Albums Card */}

            <Stat title="Tổng số album" total="15 album" icon={<Album fontSize='large' className="text-gray-500" />} />

            {/* Total Artists Card */}

            <Stat title="Tổng số nghệ sĩ" total="15 nghệ sĩ" icon={<Mic fontSize='large' className="text-gray-500" />} />
            {/* Total Genres Card */}
            <Stat title="Tổng số thể loại" total="15 thể loại" icon={<Category fontSize='large' className="text-gray-500" />} />
        </div>
    )
}
