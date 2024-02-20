import Headers from '../components/header'
import BookmarkCard from '../components/bookmarkCard'
import BookmarkForm from '../components/bookmarkForm'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'

function Bookmarks() {
  const data = useLoaderData()
  console.log(data)

  const [newBookmark, setNewBookmark] = useState(false)

  function handleNewBookmark() {
    setNewBookmark(true)
    console.log(`onClickHandleNew`)
  }

  return (
    <div className="top-container">
      <Headers onButtonClick={handleNewBookmark} />
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
