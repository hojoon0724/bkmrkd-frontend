import BookmarkCard from '../components/bookmarkCard'
import BookmarkForm from '../components/bookmarkForm'

function Bookmarks() {
  return (
    <div className="bookmarks-container">
      <BookmarkForm />
      <BookmarkCard />
    </div>
  )
}

export default Bookmarks
