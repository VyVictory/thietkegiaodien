import React, { useState } from 'react'

export default function TableSong({ query }) {
    const [songs, setSongs] = useState([
        {
            id: 1,
            name: "bao tiền một mớ bình yên?",
            artist: "14 Casper",
            album: "Không",
            genre: "Ballad",
            releaseDate: "2025-04-10"
        },
        {
            id: 2,
            name: "Chạy Ngay Đi",
            artist: "Sơn Tùng M-TP",
            album: "M-TP Collection",
            genre: "Pop",
            releaseDate: "2018-05-12"
        },
        {
            id: 3,
            name: "3107",
            artist: "W/N",
            album: "3107 Series",
            genre: "Lo-fi",
            releaseDate: "2020-07-31"
        },
        {
            id: 4,
            name: "Có Chắc Yêu Là Đây",
            artist: "Sơn Tùng M-TP",
            album: "Sky Tour",
            genre: "R&B",
            releaseDate: "2020-07-05"
        },
        {
            id: 5,
            name: "Tình Yêu Mang Theo",
            artist: "Andiez",
            album: "Andiez Ballads",
            genre: "Ballad",
            releaseDate: "2019-11-21"
        },
        {
            id: 6,
            name: "Sau Tất Cả",
            artist: "Erik",
            album: "Erik Collection",
            genre: "Pop Ballad",
            releaseDate: "2016-01-15"
        },
        {
            id: 7,
            name: "Simple Love",
            artist: "Obito ft. Seachains",
            album: "Underground Vibes",
            genre: "Hip-hop",
            releaseDate: "2019-09-20"
        },
        {
            id: 9,
            name: "Bên Trên Tầng Lầu",
            artist: "Tăng Duy Tân",
            album: "New Wave",
            genre: "Dance",
            releaseDate: "2022-06-01"
        },
        {
            id: 10,
            name: "Yêu 5",
            artist: "Rhymastic",
            album: "SpaceSpeakers",
            genre: "R&B",
            releaseDate: "2017-03-10"
        },
        {
            id: 11,
            name: "Hơn Cả Yêu",
            artist: "Đức Phúc",
            album: "Ballad Hits",
            genre: "Ballad",
            releaseDate: "2020-02-11"
        }
    ]);

    const [editId, setEditId] = useState(null);
    const [editSong, setEditSong] = useState({});

    const handleDelete = (id) => {
        const updated = songs.filter(song => song.id !== id);
        setSongs(updated);
    };

    const handleEditClick = (song) => {
        setEditId(song.id);
        setEditSong(song);
    };

    const handleEditChange = (e) => {
        setEditSong({
            ...editSong,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        const updated = songs.map(song =>
            song.id === editId ? editSong : song
        );
        setSongs(updated);
        setEditId(null);
    };

    const handleCancel = () => {
        setEditId(null);
    };

    const filteredSong = query.trim() === "" ? songs : songs.filter(song => {
        return song.name.toLowerCase().includes(query.toLowerCase());
    });

    return (
        <tbody>
            {filteredSong.length === 0 ? (
                <tr>
                    <td colSpan="7" className="text-center py-4">
                        <p>Unable to find Song: <i>"{query}"</i></p>
                    </td>
                </tr>
            ) : (
                filteredSong.map((song, index) => (
                    <tr key={song.id} className="border-b border-[#292929]">
                        <td className="py-4">{index + 1}</td>

                        {editId === song.id ? (
                            <>
                                <td className="py-2"><input name="name" value={editSong.name} onChange={handleEditChange} /></td>
                                <td className="py-2"><input name="artist" value={editSong.artist} onChange={handleEditChange} /></td>
                                <td className="py-2"><input name="album" value={editSong.album} onChange={handleEditChange} /></td>
                                <td className="py-2"><input name="genre" value={editSong.genre} onChange={handleEditChange} /></td>
                                <td className="py-2"><input type="date" name="releaseDate" value={editSong.releaseDate} onChange={handleEditChange} /></td>
                                <td className="py-4 flex gap-2">
                                    <button onClick={handleSave} className="px-4 py-1 bg-green-500 text-white rounded">Lưu</button>
                                    <button onClick={handleCancel} className="px-4 py-1 bg-gray-500 text-white rounded">Hủy</button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td className="py-4">{song.name}</td>
                                <td className="py-4">{song.artist}</td>
                                <td className="py-4">{song.album}</td>
                                <td className="py-4">{song.genre}</td>
                                <td className="py-4">{song.releaseDate}</td>
                                <td className="py-4 flex gap-2">
                                    <button onClick={() => handleEditClick(song)} className="px-4 py-1 bg-[#2c8dd6] text-white rounded">Sửa</button>
                                    <button onClick={() => handleDelete(song.id)} className="px-4 py-1 bg-[#ff0000] text-white rounded">Xóa</button>
                                </td>
                            </>
                        )}
                    </tr>
                ))
            )}
        </tbody>
    );
}
