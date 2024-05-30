import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookmarkData from './bookmarkData';
import BookmarkForm from './bookmarkForm';
import BookmarkEditForm from './bookmarkEditForm';

const URL = process.env.REACT_APP_URL;

function BookmarkCards({ data }) {
  const navigate = useNavigate();
  const [editingBookmarkId, setEditingBookmarkId] = useState(null);
  const [editingBookmarkData, setEditingBookmarkData] = useState(null);
  const [bookmarks, setBookmarks] = useState(data);

  function handleEditSwitch(bookmarkData) {
    setEditingBookmarkId(bookmarkData._id);
    setEditingBookmarkData(bookmarkData);
  }

  function handleInputChange(updatedBookmarkData) {
    setEditingBookmarkData(updatedBookmarkData);
  }

  function cancelEdit() {
    setEditingBookmarkId(null);
  }

  async function handleEdit() {
    await fetch(`${URL}/dashboard/${editingBookmarkId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(editingBookmarkData),
    });

    setBookmarks((prevBookmarks) =>
      prevBookmarks.map((bookmark) => (bookmark._id === editingBookmarkId ? editingBookmarkData : bookmark))
    );

    cancelEdit();
  }

  async function handleDelete(id) {
    await fetch(`${URL}/dashboard/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    setBookmarks((prevBookmarks) => prevBookmarks.filter((bookmark) => bookmark._id !== id));
    navigate('/dashboard');
  }

  async function handleCreate() {}

  return (
    <div className="bookmark-card">
      <BookmarkForm />
      {bookmarks.map((bookmarkData) => (
        <div key={bookmarkData._id}>
          {editingBookmarkId === bookmarkData._id ? (
            <BookmarkEditForm
              key={bookmarkData._id}
              data={editingBookmarkData}
              onInputChange={handleInputChange}
              updateAction={handleEdit}
              cancelAction={cancelEdit}
            />
          ) : (
            <BookmarkData
              key={bookmarkData._id}
              data={bookmarkData}
              handleEditSwitch={() => handleEditSwitch(bookmarkData)}
              handleDelete={() => handleDelete(bookmarkData._id)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default BookmarkCards;
