import React, { useState } from 'react'

export default function TableCategory({ query }) {
    const [categories, setCategories] = useState([
        { id: 1, name: "EDM", desc: "nhạc quẩy", songtotal: 10, status: "hoạt động", releaseDate: "2025-04-10" },
        { id: 2, name: "Pop", desc: "nhạc thị trường", songtotal: 15, status: "hoạt động", releaseDate: "2025-03-20" },
        { id: 3, name: "Rock", desc: "nhạc mạnh mẽ", songtotal: 12, status: "hoạt động", releaseDate: "2025-02-10" },
        { id: 4, name: "Ballad", desc: "nhạc nhẹ nhàng", songtotal: 8, status: "hoạt động", releaseDate: "2025-01-15" },
        { id: 5, name: "Hip Hop", desc: "nhạc đường phố", songtotal: 18, status: "hoạt động", releaseDate: "2025-04-01" },
        { id: 6, name: "Jazz", desc: "nhạc cổ điển Mỹ", songtotal: 7, status: "hoạt động", releaseDate: "2024-12-25" },
        { id: 7, name: "Classical", desc: "nhạc cổ điển", songtotal: 20, status: "hoạt động", releaseDate: "2024-11-11" },
        { id: 8, name: "R&B", desc: "nhạc tình cảm", songtotal: 14, status: "hoạt động", releaseDate: "2025-03-01" },
        { id: 9, name: "Indie", desc: "nhạc độc lập", songtotal: 11, status: "hoạt động", releaseDate: "2025-02-18" },
        { id: 10, name: "Lo-fi", desc: "nhạc thư giãn", songtotal: 9, status: "hoạt động", releaseDate: "2025-04-05" }
    ]);

    const [editId, setEditId] = useState(null);
    const [editCategory, setEditCategory] = useState({});

    const handleDelete = (id) => {
        const updated = categories.filter(category => category.id !== id);
        setCategories(updated);
    };

    const handleEditClick = (category) => {
        setEditId(category.id);
        setEditCategory(category);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditCategory({
            ...editCategory,
            [name]: name === "songtotal" ? parseInt(value) : value
        });
    };

    const handleSave = () => {
        const updated = categories.map(category =>
            category.id === editId ? editCategory : category
        );
        setCategories(updated);
        setEditId(null);
    };

    const handleCancel = () => {
        setEditId(null);
    };

    const filteredCategory = query.trim() === "" ? categories : categories.filter(category => {
        return category.name.toLowerCase().includes(query.toLowerCase());
    });

    return (
        <tbody>
            {filteredCategory.length === 0 ? (
                <tr>
                    <td colSpan="7" className="text-center py-4">
                        <p>Không tìm thấy thể loại: <i>"{query}"</i></p>
                    </td>
                </tr>
            ) : (
                filteredCategory.map((category, index) => ( 
                        <tr key={category.id} className={`border-b border-[#292929] ${editId === category.id && "text-black"}`}> 
                        <td className="py-4">{index + 1}</td>

                        {editId === category.id ? (
                            <div className='text-black'>
                                <td className="py-2"><input name="name" value={editCategory.name} onChange={handleEditChange} /></td>
                                <td className="py-2"><input name="desc" value={editCategory.desc} onChange={handleEditChange} /></td>
                                <td className="py-2"><input type="number" name="songtotal" value={editCategory.songtotal} onChange={handleEditChange} /></td>
                                <td className="py-2"><input name="status" value={editCategory.status} onChange={handleEditChange} /></td>
                                <td className="py-2"><input type="date" name="releaseDate" value={editCategory.releaseDate} onChange={handleEditChange} /></td>
                                <td className="py-4 flex gap-2">
                                    <button onClick={handleSave} className="px-4 py-1 bg-green-500 text-white rounded">Lưu</button>
                                    <button onClick={handleCancel} className="px-4 py-1 bg-gray-500 text-white rounded">Hủy</button>
                                </td>
                            </div>
                        ) : (
                            <>
                                <td className="py-4">{category.name}</td>
                                <td className="py-4">{category.desc}</td>
                                <td className="py-4">{category.songtotal}</td>
                                <td className="py-4">{category.status}</td>
                                <td className="py-4">{category.releaseDate}</td>
                                <td className="py-4 flex gap-2">
                                    <button onClick={() => handleEditClick(category)} className="px-4 py-1 bg-[#2c8dd6] text-white rounded">Sửa</button>
                                    <button onClick={() => handleDelete(category.id)} className="px-4 py-1 bg-[#ff0000] text-white rounded">Xóa</button>
                                </td>
                            </>
                        )}
                    </tr>
                ))
            )}
        </tbody>
    )
}
