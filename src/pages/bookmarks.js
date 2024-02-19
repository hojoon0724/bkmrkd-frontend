import Headers from '../components/header'
import BookmarkCard from '../components/bookmarkCard'
import BookmarkForm from '../components/bookmarkForm'
import { useLoaderData } from 'react-router-dom'

function Bookmarks() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className="top-container">
      <Headers />
      <div className="bookmarks-container">
        <BookmarkForm />
        {data.map(bookmarkData => {
          return <BookmarkCard data={bookmarkData} />
        })}
      </div>
    </div>
  )
}

export default Bookmarks
