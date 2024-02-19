import EditBtn from './icons/edit'
import DeleteBtn from './icons/delete'

function BookmarkCard() {
  return (
    <div className="bookmark-card">
      <div className="content">
        <div className="bookmark-name">name goes here</div>
        <div className="bookmark-url">https://www.google.com/</div>
      </div>
      <div className="bookmark-buttons">
        <EditBtn />
        <DeleteBtn />
      </div>
    </div>
  )
}

export default BookmarkCard
