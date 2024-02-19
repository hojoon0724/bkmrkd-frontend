function BookmarkForm() {
  return (
    <div class="bookmark-card">
      <div class="content">
        <input class="bookmark-name-form" type="text" placeholder="New Bookmark Name" />
        <input class="bookmark-url-form" type="text" placeholder="Enter your URL" />
      </div>
      <div class="save-button">Save</div>
    </div>
  )
}

export default BookmarkForm
