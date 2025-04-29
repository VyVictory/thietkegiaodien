import React from 'react'

export default function Stat({title,total, icon}) {
  return (
    <div className="bg-white rounded-md p-4 text-black">
                <p className="text-sm font-medium mb-2">{title}</p>
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{total}</h2>
                    <div className="w-10 h-10 flex items-center justify-center">
                        {icon}
                    </div>
                </div>
            </div>
  )
}
