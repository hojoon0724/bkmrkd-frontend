import { Form } from 'react-router-dom'

function BookmarkForm() {
  return (
    <Form action="/create" method="post">
      <div className="bookmark-card">
        <div className="content">
          <input className="bookmark-name-form" type="text" placeholder="Name" />
          <input className="bookmark-url-form" type="text" placeholder="URL" />
        </div>
        <div className="save-button">
          <input type="submit" value={'save'} />
        </div>
      </div>
    </Form>
  )
}

export default BookmarkForm
