import EditBtn from './icons/edit';
import DeleteBtn from './icons/delete';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookmarkEditForm from './bookmarkEditForm';

const URL = process.env.REACT_APP_URL;

function BookmarkCard({ data, onEditClick }) {
  const navigate = useNavigate();
  const [siteTitle, setSiteTitle] = useState();
  const [siteUrl, setSiteUrl] = useState();

  useEffect(() => {
    setSiteTitle(data.title);
    setSiteUrl(data.url);
  }, []);

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
          <div className="bookmark-name">{siteTitle}</div>
          <div className="bookmark-url">{siteUrl}</div>
        </div>
      </a>
      <div className="bookmark-buttons">
        <EditBtn action={onEditClick} key={data._id} />
        <DeleteBtn onDeleteClick={handleDelete} />
      </div>
    </div>
  );
}

export default BookmarkCard;
