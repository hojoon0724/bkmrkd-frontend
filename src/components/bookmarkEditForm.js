import { Form } from 'react-router-dom';

function BookmarkEditForm({ data, updateAction, cancelAction }) {
  return (
    <form
    // action={`update/${data._id}`} method="put"
    >
      <div className="bookmark-data">
        <div className="content">
          <input className="bookmark-name-form" name="title" type="text" defaultValue={data.title} />
          <input className="bookmark-url-form" name="url" type="url" defaultValue={data.url} />
        </div>
        <div className="edit-buttons-container">
          {/* <input type="submit" className="update-button" value={'update'} /> */}
          <button className="update-button" onClick={updateAction}>
            update
          </button>
          <button className="cancel-button" onClick={cancelAction}>
            cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default BookmarkEditForm;
