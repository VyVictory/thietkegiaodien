import React from 'react'
import { Disc, Mic, FolderTree, FileMusic } from "lucide-react"
import Stat from '../../components/admin/Stat'
export default function Dashboard() {
    return (
        <div className="grid grid-cols-4 gap-6 md:grid-cols-4 sm:grid-cols-1">
            {/* Total Songs Card */}
            <Stat title="Tổng số bài nhạc" total="15 bài" icon={<FileMusic size={24} className="text-gray-500" />} />

            {/* Total Albums Card */}

            <Stat title="Tổng số album" total="15 album" icon={<Disc size={24} className="text-gray-500" />} />

            {/* Total Artists Card */}

            <Stat title="Tổng số nghệ sĩ" total="15 nghệ sĩ" icon={<Mic size={24} className="text-gray-500" />} />
            {/* Total Genres Card */}
            <Stat title="Tổng số thể loại" total="15 thể loại" icon={<FolderTree size={24} className="text-gray-500" />} />
        </div>
    )
}
