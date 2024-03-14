import EditBtn from './icons/edit';
import DeleteBtn from './icons/delete';
import { useState, useEffect } from 'react';

function BookmarkData({ data, bookmarkShow, handleEditSwitch, handleDelete }) {
  const [siteTitle, setSiteTitle] = useState();
  const [siteUrl, setSiteUrl] = useState();

  useEffect(() => {
    setSiteTitle(data.title);
    setSiteUrl(data.url);
  }, [data]);

  return (
    <div key={data._id} className="bookmark-data">
      <a href={data.url}>
        <div className="content">
          <div className="bookmark-name">{siteTitle}</div>
          <div className="bookmark-url">{siteUrl}</div>
        </div>
      </a>
      <div className="bookmark-buttons">
        <EditBtn onEditClick={handleEditSwitch} />
        <DeleteBtn onDeleteClick={handleDelete} />
      </div>
    </div>
  );
}

export default BookmarkData;
