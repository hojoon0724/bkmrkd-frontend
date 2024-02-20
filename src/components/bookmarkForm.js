import { Form } from 'react-router-dom'

function BookmarkForm() {
  return (
    <Form action="/create" method="post">
      <div class="bookmark-card">
        <div class="content">
          <input class="bookmark-name-form" type="text" placeholder="Name" />
          <input class="bookmark-url-form" type="text" placeholder="URL" />
        </div>
        <div class="save-button">
          <input type="submit" value={'save'} />
        </div>
      </div>
    </Form>
  )
}

export default BookmarkForm
