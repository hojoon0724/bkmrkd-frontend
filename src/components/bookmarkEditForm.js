import { Form } from 'react-router-dom';

function BookmarkEditForm() {
  return (
    <Form action="update" method="put">
      <div className="bookmark-card">
        <div className="content">
          <input className="bookmark-name-form" name="title" type="text" value={data.title} />
          <input className="bookmark-url-form" name="url" type="url" value={data.url} />
        </div>
        <div className="save-button">
          <input type="submit" value={'update'} />
        </div>
      </div>
    </Form>
  );
}

export default BookmarkEditForm;
