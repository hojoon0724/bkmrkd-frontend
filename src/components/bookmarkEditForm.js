import { Form } from 'react-router-dom';

function BookmarkEditForm({ data, updateAction, cancelAction }) {
  return (
    <div className="bookmark-data">
      <div className="content">
        <input className="bookmark-name-form" name="title" type="text" defaultValue={data.title} />
        <input className="bookmark-url-form" name="url" type="url" defaultValue={data.url} />
      </div>

      <div className="edit-buttons-container">
        <button className="update-button" onClick={updateAction}>
          update
        </button>
        <button className="cancel-button" onClick={cancelAction}>
          cancel
        </button>
      </div>
    </div>
  );
}

export default BookmarkEditForm;
