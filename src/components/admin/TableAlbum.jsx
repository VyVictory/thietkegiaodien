import React, { useState } from 'react'
export default function TableAlbum({ query }) {
    const [albums] = useState([
        {
            id: 1,
            name: "bao tiền một mớ bình yên?",
            artist: "14 Casper",
            songtotal: 10,
            genre: "Ballad",
            releaseDate: "2025-04-10"
        },
        {
            id: 2,
            name: "M-TP Collection",
            artist: "Sơn Tùng M-TP",
            songtotal: 8,
            genre: "Pop",
            releaseDate: "2020-12-20"
        },
        {
            id: 3,
            name: "3107 Series",
            artist: "W/N",
            songtotal: 6,
            genre: "Lo-fi",
            releaseDate: "2021-08-01"
        },
        {
            id: 4,
            name: "Ballad Hits",
            artist: "Đức Phúc",
            songtotal: 9,
            genre: "Ballad",
            releaseDate: "2020-03-10"
        },
        {
            id: 5,
            name: "SpaceSpeakers",
            artist: "SpaceSpeakers",
            songtotal: 12,
            genre: "Hip-hop",
            releaseDate: "2021-11-15"
        },
        {
            id: 6,
            name: "Lover",
            artist: "Taylor Swift",
            songtotal: 18,
            genre: "Pop",
            releaseDate: "2019-08-23"
        },
        {
            id: 7,
            name: "Chill With Me",
            artist: "Andiez",
            songtotal: 7,
            genre: "R&B",
            releaseDate: "2022-04-02"
        },
        {
            id: 8,
            name: "Sky Tour",
            artist: "Sơn Tùng M-TP",
            songtotal: 5,
            genre: "Pop",
            releaseDate: "2020-06-06"
        },
        {
            id: 9,
            name: "The Playlist",
            artist: "Obito",
            songtotal: 10,
            genre: "Rap",
            releaseDate: "2021-10-05"
        },
        {
            id: 10,
            name: "Indie Breeze",
            artist: "Vũ.",
            songtotal: 8,
            genre: "Indie",
            releaseDate: "2023-03-18"
        }
    ]);
    const filteredAlbum = query.trim() === "" ? albums : albums.filter(album => {
        return album.name.toLowerCase().includes(query.toLowerCase());
    });
    return (
        <tbody>
            {filteredAlbum.length === 0 ? (
                <tr>
                    <td colSpan="5" className="text-center py-4">
                        <p>Unable to find Album: <i>"{query}"</i></p>
                    </td>
                </tr>
            ) : (
                filteredAlbum.map((album, index) => (
                    <tr key={index} className="border-b border-[#292929]">
                        <td className="py-4">{index + 1}</td>
                        <td className="py-4">{album.name}</td>
                        <td className="py-4">{album.artist}</td>
                        <td className="py-4">{album.songtotal}</td>
                        <td className="py-4">{album.genre}</td>
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
