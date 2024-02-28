import Headers from '../components/header'
import BookmarkCard from '../components/bookmarkCard'
import BookmarkForm from '../components/bookmarkForm'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'

function Bookmarks() {
  const data = useLoaderData()

  console.log(data)

  const numberarray = [1, 2, 3, 4, 5]

  const [newBookmark, setNewBookmark] = useState(false)

  function handleNewBookmark() {
    setNewBookmark(<BookmarkForm />)
    console.log(`onClickHandleNew`)
  }

  return (
    <div className="top-container">
      <Headers onButtonClick={handleNewBookmark} />
      <div className="bookmarks-container">
        {newBookmark}
        {data.map(bookmarkData => {
          return <BookmarkCard data={bookmarkData} />
        })}
        <div className="end-list-spacer"></div>
      </div>
    </div>
  )
}

export default Bookmarks
