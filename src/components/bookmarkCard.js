import EditBtn from './icons/edit'
import DeleteBtn from './icons/delete'

function BookmarkCard({ data }) {
  return (
    <div className="bookmark-card">
      <a href={data.url}>
        <div className="content">
          <div className="bookmark-name">{data.title}</div>
          <div className="bookmark-url">{data.url}</div>
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
