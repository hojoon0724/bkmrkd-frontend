import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookmarkData from './bookmarkData';
import BookmarkEditForm from './bookmarkEditForm';

const URL = process.env.REACT_APP_URL;

function BookmarkCard({ data }) {
  const navigate = useNavigate();
  const [editingBookmarkId, setEditingBookmarkId] = useState(null);

  async function handleEditSwitch(id) {
    console.log(`handleEditSwitch ${id}`);
    setEditingBookmarkId(id);
  }

  async function handleDelete(id) {
    await fetch(`${URL}/dashboard/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    navigate('/dashboard');
  }

  return (
    <div className="bookmark-card">
      {data.map((bookmarkData) => (
        <div key={bookmarkData._id}>
          {editingBookmarkId === bookmarkData._id ? (
            <BookmarkEditForm key={bookmarkData._id} data={bookmarkData} />
          ) : (
            <BookmarkData
              key={bookmarkData._id}
              data={bookmarkData}
              handleEditSwitch={() => handleEditSwitch(bookmarkData._id)}
              handleDelete={() => handleDelete(bookmarkData._id)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default BookmarkCard;
