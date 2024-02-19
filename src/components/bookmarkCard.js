import EditBtn from './icons/edit'
import DeleteBtn from './icons/delete'

const placeholderName = 'Google'
const placeholderUrl = 'https://www.google.com/'

function BookmarkCard() {
  return (
    <div className="bookmark-card">
      <a href={placeholderUrl}>
        <div className="content">
          <div className="bookmark-name">{placeholderName}</div>
          <div className="bookmark-url">{placeholderUrl}</div>
        </div>
      </a>
      <div className="bookmark-buttons">
        <EditBtn />
        <DeleteBtn />
      </div>
    </div>
  )
}

export default BookmarkCard
