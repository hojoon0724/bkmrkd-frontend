import { Form } from 'react-router-dom';

function BookmarkEditForm({ data, action }) {
  return (
    <Form action={`update/${data._id}`} method="put">
      <div className="bookmark-data">
        <div className="content">
          <input className="bookmark-name-form" name="title" type="text" defaultValue={data.title} />
          <input className="bookmark-url-form" name="url" type="url" defaultValue={data.url} />
        </div>
        <div className="edit-buttons-container">
          <input type="submit" className="update-button" value={'update'} />
          <button className="cancel-button" onClick={action}>
            cancel
          </button>
        </div>
      </div>
    </Form>
  );
}

export default BookmarkEditForm;
