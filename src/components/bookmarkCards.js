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

  async function handleEditSwitch(bookmarkData) {
    console.log(`edit switch ${bookmarkData._id}`);
    setEditingBookmarkId(bookmarkData._id);
    setEditingBookmarkData(bookmarkData);
  }

  async function handleInputChange(newValue) {
    console.log(newValue);
  }

  function cancelEdit() {
    setEditingBookmarkId(' ');
  }

  async function handleEdit() {
    console.log('handle edit function run');
    // console.log(`handle edit ${bookmarkData._id}`);
    // const formData = await request.formData();
    // const updatedBookmark = {
    //   title: formData.get('title'),
    //   url: formData.get('url'),
    // };

    // await fetch(`${URL}/dashboard/${params.id}`, {
    //   method: 'put',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${localStorage.getItem('token')}`
    //   },
    //   body: JSON.stringify(updatedBookmark)
    // });
    // cancelEdit();
  }

  async function handleDelete(id) {
    await fetch(`${URL}/dashboard/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    navigate('/dashboard');
  }

  return (
    <div className="bookmark-card">
      <BookmarkForm />
      {data.map((bookmarkData) => (
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
