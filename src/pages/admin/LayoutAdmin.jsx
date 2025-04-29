import React from 'react'
import { Outlet } from 'react-router-dom'
import SiderBar from '../../components/admin/SiderBar'
export default function LayoutAdmin() {
    return (
        <div className="flex h-screen bg-black text-white">
            {/* Sidebar */}
            <SiderBar />

            {/* Main Content */}
            <div className="flex-1 p-6">
                <Outlet />
            </div>
        </div>
    )
}
