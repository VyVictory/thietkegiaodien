import React, { useState } from 'react'

export default function TableArtist({ query }) {
    const [artists] = useState([
        {
            id: 1,
            name: "14 Casper",
            nation: "Việt Nam",
            songtotal: 10,
            albumtotal: 4,
            releaseDate: "2025-04-10"
        },
        {
            id: 2,
            name: "Sơn Tùng M-TP",
            nation: "Việt Nam",
            songtotal: 20,
            albumtotal: 5,
            releaseDate: "2015-12-01"
        },
        {
            id: 3,
            name: "Erik",
            nation: "Việt Nam",
            songtotal: 15,
            albumtotal: 3,
            releaseDate: "2016-03-18"
        },
        {
            id: 4,
            name: "Đức Phúc",
            nation: "Việt Nam",
            songtotal: 18,
            albumtotal: 4,
            releaseDate: "2017-02-11"
        },
        {
            id: 5,
            name: "W/N",
            nation: "Việt Nam",
            songtotal: 12,
            albumtotal: 2,
            releaseDate: "2020-07-31"
        },
        {
            id: 6,
            name: "Andiez",
            nation: "Việt Nam",
            songtotal: 10,
            albumtotal: 3,
            releaseDate: "2018-09-15"
        },
        {
            id: 7,
            name: "Rhymastic",
            nation: "Việt Nam",
            songtotal: 22,
            albumtotal: 6,
            releaseDate: "2015-05-10"
        },
        {
            id: 8,
            name: "Obito",
            nation: "Việt Nam",
            songtotal: 9,
            albumtotal: 2,
            releaseDate: "2019-09-20"
        },
        {
            id: 9,
            name: "Tăng Duy Tân",
            nation: "Việt Nam",
            songtotal: 11,
            albumtotal: 3,
            releaseDate: "2022-06-01"
        },
        {
            id: 10,
            name: "Vũ.",
            nation: "Việt Nam",
            songtotal: 14,
            albumtotal: 4,
            releaseDate: "2020-10-25"
        }
    ]);
    const filteredArtist = query.trim() === "" ? artists : artists.filter(artist => {
        return artist.name.toLowerCase().includes(query.toLowerCase());
    });
    return (
        <tbody>
            {filteredArtist.length === 0 ? (
                <tr>
                    <td colSpan="5" className="text-center py-4">
                        <p>Unable to find Artist: <i>"{query}"</i></p>
                    </td>
                </tr>
            ) : (
                filteredArtist.map((album, index) => (
                    <tr key={index} className="border-b border-[#292929]">
                        <td className="py-4">{index + 1}</td>
                        <td className="py-4">{album.name}</td>
                        <td className="py-4">{album.nation}</td>
                        <td className="py-4">{album.songtotal}</td>
                        <td className="py-4">{album.albumtotal}</td>
                        <td className="py-4">{album.releaseDate}</td>
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
