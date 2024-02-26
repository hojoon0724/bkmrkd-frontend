import EditBtn from './icons/edit'
import DeleteBtn from './icons/delete'
import { useState } from 'react'

function BookmarkCard({ data }) {
  const [siteTitle, setSiteTitle] = useState()
  const [siteUrl, setSiteUrl] = useState()

  async function handleEdit() {
    console.log(`edit bookmark action`)
  }

  async function handleDelete() {
    console.log(`delete bookmark action`)
    await fetch(`/bookmark/${data._id}`, {
      method: 'DELETE'
    })
  }

  return (
    <div key={data._id} className="bookmark-card">
      <a href={data.url}>
        <div className="content">
          <div className="bookmark-name">{data.title}</div>
          <div className="bookmark-url">{data.url}</div>
        </div>
      </a>
      <div className="bookmark-buttons">
        <EditBtn onEditClick={handleEdit} />
        <DeleteBtn onDeleteClick={handleDelete} />
      </div>
    </div>
  )
}

export default BookmarkCard
