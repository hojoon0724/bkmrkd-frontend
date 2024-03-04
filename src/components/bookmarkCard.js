import EditBtn from './icons/edit'
import DeleteBtn from './icons/delete'
import { useState } from 'react'

const URL = process.env.REACT_APP_URL

function BookmarkCard({ data }) {
  const [siteTitle, setSiteTitle] = useState()
  const [siteUrl, setSiteUrl] = useState()

  async function handleEdit() {
    console.log(`edit bookmark action`)
  }

  async function handleDelete() {
    console.log(`delete bookmark action`)

    // await fetch(`/bookmark/${data._id}`, {
    //   method: 'DELETE'
    // })

    await fetch(`${URL}/bookmark/${data._id}`, {
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
        {/* 
        <Form action="/delete" method="post">
          <input type="submit" value={'delete'} />
        </Form> */}
      </div>
    </div>
  )
}

export default BookmarkCard
