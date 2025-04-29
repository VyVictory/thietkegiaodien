import React from 'react'
import { LayoutDashboard, Music, FolderTree, Album, User } from "lucide-react"
export default function SiderBar() {
    return (
        <div className="w-[224px] border-r border-zinc-800 flex flex-col">
            <div className="p-6 border-b border-zinc-800">
                <h1 className="font-bold text-sm tracking-wider">ADMINISTRATOR</h1>
            </div>

            <nav className="flex flex-col py-4">
                <a href="/admin" className="flex items-center gap-3 px-6 py-3 text-white hover:bg-zinc-900">
                    <LayoutDashboard size={20} className="text-white" />
                    <span>Dashboard</span>
                </a>

                <a href="/admin/songmanager" className="flex items-center gap-3 px-6 py-3 text-white hover:bg-zinc-900">
                    <Music size={20} className="text-white" />
                    <span>Quản lý nhạc</span>
                </a>

                <a href="/admin/albummanager" className="flex items-center gap-3 px-6 py-3 text-white hover:bg-zinc-900">
                    <Album size={20} className="text-white" />
                    <span>Quản lý album</span>
                </a>

                <a href="/admin/artistmanager" className="flex items-center gap-3 px-6 py-3 text-white hover:bg-zinc-900">
                    <User size={20} className="text-white" />
                    <span>Quản lý nghệ sĩ</span>
                </a>

                <a href="/admin/categorymanager" className="flex items-center gap-3 px-6 py-3 text-white hover:bg-zinc-900">
                    <FolderTree size={20} className="text-white" />
                    <span>Thể loại</span>
                </a>
            </nav>
        </div>
    )
}
