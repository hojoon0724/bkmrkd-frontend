import { Form } from 'react-router-dom'

function BookmarkForm() {
  return (
    <Form action="/create" method="post">
      <div className="bookmark-card">
        <div className="content">
          <input className="bookmark-name-form" name="title" type="text" placeholder="Name" />
          <input className="bookmark-url-form" name="url" type="url" placeholder="URL" />
          <input
            className="bookmark-username-form"
            style={{ display: 'none' }}
            name="username"
            type="text"
            value="username"
          />
        </div>
        <div className="save-button">
          <input type="submit" value={'save'} />
        </div>
      </div>
    </Form>
  )
}

export default BookmarkForm
