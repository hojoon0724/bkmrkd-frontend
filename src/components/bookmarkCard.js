import EditBtn from './icons/edit';
import DeleteBtn from './icons/delete';
import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';

const URL = process.env.REACT_APP_URL;

function BookmarkCard({ data }) {
  const navigate = useNavigate();
  const [siteTitle, setSiteTitle] = useState();
  const [siteUrl, setSiteUrl] = useState();

  async function handleEdit() {
    console.log(`edit bookmark action`);
    setSiteTitle('edit');
  }

  async function handleDelete() {
    await fetch(`${URL}/dashboard/${data._id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    navigate('/dashboard');
  }

  return (
    <div key={data._id} className="bookmark-card">
      <a href={data.url}>
        <div className="content">
          <div className="bookmark-name">{data.title}</div>
          <div className="bookmark-url">{data.url}</div>
        </div>
      </a>
      <div className="bookmark-buttons">
        <EditBtn onEditClick={handleEdit} />
        <DeleteBtn onDeleteClick={handleDelete} />
      </div>
    </div>
  );
}

export default BookmarkCard;
