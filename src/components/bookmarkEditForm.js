import { Form } from 'react-router-dom';

function BookmarkEditForm({ data }) {
  return (
    <Form action={`update/${data._id}`} method="put">
      <div className="bookmark-data">
        <div className="content">
          <input className="bookmark-name-form" name="title" type="text" defaultValue={data.title} />
          <input className="bookmark-url-form" name="url" type="url" defaultValue={data.url} />
        </div>
        <div className="save-button">
          <input type="submit" value={'update'} />
        </div>
      </div>
    </Form>
  );
}

export default BookmarkEditForm;
