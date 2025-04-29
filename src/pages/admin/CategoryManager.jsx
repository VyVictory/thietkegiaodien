import React from 'react'
import { Suspense } from 'react'
import { useState } from 'react'
import Loading from '../../components/Loading'
import TableCategory from '../../components/admin/TableCategory'
export default function CategoryManager() {
  const [query, setQuery] = useState('')
  return (
    <div className="overflow-x-auto mx-5 my-5 rounded-sm ">
      {/* <label>
                            Search albums:
                            <input value={query} onChange={e => setQuery(e.target.value)} />
                        </label> */}
      <label className="input input-bordered flex items-center gap-2 rounded-none bg-[#292929] px-2">
        <input
          type="text"
          className="grow p-2  bg-[#292929]"
          placeholder="Search"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="white"
          className="h-6 w-6 opacity-70 ">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
      </label>
      <div className="px-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#292929]">
              <th className="py-3 text-left font-medium">STT</th>
              <th className="py-3 text-left font-medium">Tên thể loại</th>
              <th className="py-3 text-left font-medium">mô tả</th>
              <th className="py-3 text-left font-medium">số bài hát</th>
              <th className="py-3 text-left font-medium">trạng thái</th>
              <th className="py-3 text-left font-medium">Ngày tạo</th>
              <th className="py-3 text-left font-medium"></th>
            </tr>
          </thead>
          <Suspense fallback={<Loading />}>
            <TableCategory query={query} />
          </Suspense>
        </table>
      </div>
    </div>
  )
}
