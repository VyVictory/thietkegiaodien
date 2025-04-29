import React, { useState } from 'react'

export default function TableCategory({ query }) {
    const [categories] = useState([
        {
            id: 1,
            name: "EDM",
            desc: "nhạc quẩy",
            songtotal: 10,
            status: "hoạt động",
            releaseDate: "2025-04-10"
        },
        {
            id: 2,
            name: "Pop",
            desc: "nhạc thị trường",
            songtotal: 15,
            status: "hoạt động",
            releaseDate: "2025-03-20"
        },
        {
            id: 3,
            name: "Rock",
            desc: "nhạc mạnh mẽ",
            songtotal: 12,
            status: "hoạt động",
            releaseDate: "2025-02-10"
        },
        {
            id: 4,
            name: "Ballad",
            desc: "nhạc nhẹ nhàng",
            songtotal: 8,
            status: "hoạt động",
            releaseDate: "2025-01-15"
        },
        {
            id: 5,
            name: "Hip Hop",
            desc: "nhạc đường phố",
            songtotal: 18,
            status: "hoạt động",
            releaseDate: "2025-04-01"
        },
        {
            id: 6,
            name: "Jazz",
            desc: "nhạc cổ điển Mỹ",
            songtotal: 7,
            status: "hoạt động",
            releaseDate: "2024-12-25"
        },
        {
            id: 7,
            name: "Classical",
            desc: "nhạc cổ điển",
            songtotal: 20,
            status: "hoạt động",
            releaseDate: "2024-11-11"
        },
        {
            id: 8,
            name: "R&B",
            desc: "nhạc tình cảm",
            songtotal: 14,
            status: "hoạt động",
            releaseDate: "2025-03-01"
        },
        {
            id: 9,
            name: "Indie",
            desc: "nhạc độc lập",
            songtotal: 11,
            status: "hoạt động",
            releaseDate: "2025-02-18"
        },
        {
            id: 10,
            name: "Lo-fi",
            desc: "nhạc thư giãn",
            songtotal: 9,
            status: "hoạt động",
            releaseDate: "2025-04-05"
        }
    ]);

    const filteredCategory = query.trim() === "" ? categories : categories.filter(category => {
        return category.name.toLowerCase().includes(query.toLowerCase());
    });

    return (
        <tbody>
            {filteredCategory.length === 0 ? (
                <tr>
                    <td colSpan="5" className="text-center py-4">
                        <p>Unable to find Song: <i>"{query}"</i></p>
                    </td>
                </tr>
            ) : (
                filteredCategory.map((song, index) => (
                    <tr key={index} className="border-b border-[#292929]">
                        <td className="py-4">{index + 1}</td>
                        <td className="py-4">{song.name}</td>
                        <td className="py-4">{song.desc}</td>
                        <td className="py-4">{song.songtotal}</td>
                        <td className="py-4">{song.status}</td>
                        <td className="py-4">{song.releaseDate}</td>
                        <td className="py-4 flex gap-2">
                            <button className="px-4 py-1 bg-[#2c8dd6] text-white rounded">Sửa</button>
                            <button className="px-4 py-1 bg-[#ff0000] text-white rounded">Xóa</button>
                        </td>
                    </tr>
                ))
            )}
        </tbody>
    )
}
