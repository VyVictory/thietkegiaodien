import React, { useState } from 'react'

export default function TableAlbum({ query }) {
    const [albums, setAlbums] = useState([
        { id: 1, name: "bao tiền một mớ bình yên?", artist: "14 Casper", songtotal: 10, genre: "Ballad", releaseDate: "2025-04-10" },
        { id: 2, name: "M-TP Collection", artist: "Sơn Tùng M-TP", songtotal: 8, genre: "Pop", releaseDate: "2020-12-20" },
        { id: 3, name: "3107 Series", artist: "W/N", songtotal: 6, genre: "Lo-fi", releaseDate: "2021-08-01" },
        { id: 4, name: "Ballad Hits", artist: "Đức Phúc", songtotal: 9, genre: "Ballad", releaseDate: "2020-03-10" },
        { id: 5, name: "SpaceSpeakers", artist: "SpaceSpeakers", songtotal: 12, genre: "Hip-hop", releaseDate: "2021-11-15" },
        { id: 6, name: "Lover", artist: "Taylor Swift", songtotal: 18, genre: "Pop", releaseDate: "2019-08-23" },
        { id: 7, name: "Chill With Me", artist: "Andiez", songtotal: 7, genre: "R&B", releaseDate: "2022-04-02" },
        { id: 8, name: "Sky Tour", artist: "Sơn Tùng M-TP", songtotal: 5, genre: "Pop", releaseDate: "2020-06-06" },
        { id: 9, name: "The Playlist", artist: "Obito", songtotal: 10, genre: "Rap", releaseDate: "2021-10-05" },
        { id: 10, name: "Indie Breeze", artist: "Vũ.", songtotal: 8, genre: "Indie", releaseDate: "2023-03-18" }
    ]);

    const [editId, setEditId] = useState(null);
    const [editAlbum, setEditAlbum] = useState({});

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa album này?");
        if (confirmDelete) {
            setAlbums(albums.filter(album => album.id !== id));
        }
    };

    const handleEditClick = (album) => {
        setEditId(album.id);
        setEditAlbum(album);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditAlbum({
            ...editAlbum,
            [name]: name === "songtotal" ? parseInt(value) : value
        });
    };

    const handleSave = () => {
        const updated = albums.map(album => album.id === editId ? editAlbum : album);
        setAlbums(updated);
        setEditId(null);
    };

    const handleCancel = () => {
        setEditId(null);
    };

    const filteredAlbum = query.trim() === "" ? albums : albums.filter(album =>
        album.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <tbody>
            {filteredAlbum.length === 0 ? (
                <tr>
                    <td colSpan="7" className="text-center py-4">
                        <p>Không tìm thấy Album: <i>"{query}"</i></p>
                    </td>
                </tr>
            ) : (
                filteredAlbum.map((album, index) => ( 
                                                                        <tr key={album.id} className={`border-b border-[#292929] ${editId === album.id && "text-black"}`}> 

                        <td className="py-4">{index + 1}</td>

                        {editId === album.id ? (
                            <div className='text-black'>
                                <td className="py-2">
                                    <input name="name" value={editAlbum.name} onChange={handleEditChange} />
                                </td>
                                <td className="py-2">
                                    <input name="artist" value={editAlbum.artist} onChange={handleEditChange} />
                                </td>
                                <td className="py-2">
                                    <input type="number" name="songtotal" value={editAlbum.songtotal} onChange={handleEditChange} />
                                </td>
                                <td className="py-2">
                                    <input name="genre" value={editAlbum.genre} onChange={handleEditChange} />
                                </td>
                                <td className="py-2">
                                    <input type="date" name="releaseDate" value={editAlbum.releaseDate} onChange={handleEditChange} />
                                </td>
                                <td className="py-4 flex gap-2">
                                    <button onClick={handleSave} className="px-4 py-1 bg-green-500 text-white rounded">Lưu</button>
                                    <button onClick={handleCancel} className="px-4 py-1 bg-gray-500 text-white rounded">Hủy</button>
                                </td>
                            </div>
                        ) : (
                            <>
                                <td className="py-4">{album.name}</td>
                                <td className="py-4">{album.artist}</td>
                                <td className="py-4">{album.songtotal}</td>
                                <td className="py-4">{album.genre}</td>
                                <td className="py-4">{album.releaseDate}</td>
                                <td className="py-4 flex gap-2">
                                    <button onClick={() => handleEditClick(album)} className="px-4 py-1 bg-[#2c8dd6] text-white rounded">Sửa</button>
                                    <button onClick={() => handleDelete(album.id)} className="px-4 py-1 bg-[#ff0000] text-white rounded">Xóa</button>
                                </td>
                            </>
                        )}
                    </tr>
                ))
            )}
        </tbody>
    );
}
