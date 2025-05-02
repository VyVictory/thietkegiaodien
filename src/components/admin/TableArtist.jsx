import React, { useState } from 'react'

export default function TableArtist({ query }) {
    const [artists, setArtists] = useState([
        { id: 1, name: "14 Casper", nation: "Việt Nam", songtotal: 10, albumtotal: 4, releaseDate: "2025-04-10" },
        { id: 2, name: "Sơn Tùng M-TP", nation: "Việt Nam", songtotal: 20, albumtotal: 5, releaseDate: "2015-12-01" },
        { id: 3, name: "Erik", nation: "Việt Nam", songtotal: 15, albumtotal: 3, releaseDate: "2016-03-18" },
        { id: 4, name: "Đức Phúc", nation: "Việt Nam", songtotal: 18, albumtotal: 4, releaseDate: "2017-02-11" },
        { id: 5, name: "W/N", nation: "Việt Nam", songtotal: 12, albumtotal: 2, releaseDate: "2020-07-31" },
        { id: 6, name: "Andiez", nation: "Việt Nam", songtotal: 10, albumtotal: 3, releaseDate: "2018-09-15" },
        { id: 7, name: "Rhymastic", nation: "Việt Nam", songtotal: 22, albumtotal: 6, releaseDate: "2015-05-10" },
        { id: 8, name: "Obito", nation: "Việt Nam", songtotal: 9, albumtotal: 2, releaseDate: "2019-09-20" },
        { id: 9, name: "Tăng Duy Tân", nation: "Việt Nam", songtotal: 11, albumtotal: 3, releaseDate: "2022-06-01" },
        { id: 10, name: "Vũ.", nation: "Việt Nam", songtotal: 14, albumtotal: 4, releaseDate: "2020-10-25" }
    ]);

    const [editId, setEditId] = useState(null);
    const [editArtist, setEditArtist] = useState({});

    const handleDelete = (id) => {
        const confirmed = window.confirm("Bạn có chắc muốn xóa nghệ sĩ này?");
        if (confirmed) {
            setArtists(artists.filter(artist => artist.id !== id));
        }
    };

    const handleEditClick = (artist) => {
        setEditId(artist.id);
        setEditArtist(artist);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditArtist({
            ...editArtist,
            [name]: ["songtotal", "albumtotal"].includes(name) ? parseInt(value) : value
        });
    };

    const handleSave = () => {
        const updated = artists.map(artist => artist.id === editId ? editArtist : artist);
        setArtists(updated);
        setEditId(null);
    };

    const handleCancel = () => {
        setEditId(null);
    };

    const filteredArtist = query.trim() === "" ? artists : artists.filter(artist =>
        artist.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <tbody>
            {filteredArtist.length === 0 ? (
                <tr>
                    <td colSpan="7" className="text-center py-4">
                        <p>Không tìm thấy nghệ sĩ: <i>"{query}"</i></p>
                    </td>
                </tr>
            ) : (
                filteredArtist.map((artist, index) => (
                    <tr key={artist.id} className="border-b border-[#292929]">
                        <td className="py-4">{index + 1}</td>

                        {editId === artist.id ? (
                            <>
                                <td className="py-2">
                                    <input name="name" value={editArtist.name} onChange={handleEditChange} />
                                </td>
                                <td className="py-2">
                                    <input name="nation" value={editArtist.nation} onChange={handleEditChange} />
                                </td>
                                <td className="py-2">
                                    <input type="number" name="songtotal" value={editArtist.songtotal} onChange={handleEditChange} />
                                </td>
                                <td className="py-2">
                                    <input type="number" name="albumtotal" value={editArtist.albumtotal} onChange={handleEditChange} />
                                </td>
                                <td className="py-2">
                                    <input type="date" name="releaseDate" value={editArtist.releaseDate} onChange={handleEditChange} />
                                </td>
                                <td className="py-4 flex gap-2">
                                    <button onClick={handleSave} className="px-4 py-1 bg-green-500 text-white rounded">Lưu</button>
                                    <button onClick={handleCancel} className="px-4 py-1 bg-gray-500 text-white rounded">Hủy</button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td className="py-4">{artist.name}</td>
                                <td className="py-4">{artist.nation}</td>
                                <td className="py-4">{artist.songtotal}</td>
                                <td className="py-4">{artist.albumtotal}</td>
                                <td className="py-4">{artist.releaseDate}</td>
                                <td className="py-4 flex gap-2">
                                    <button onClick={() => handleEditClick(artist)} className="px-4 py-1 bg-[#2c8dd6] text-white rounded">Sửa</button>
                                    <button onClick={() => handleDelete(artist.id)} className="px-4 py-1 bg-[#ff0000] text-white rounded">Xóa</button>
                                </td>
                            </>
                        )}
                    </tr>
                ))
            )}
        </tbody>
    )
}
