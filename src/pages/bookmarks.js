import Header from '../components/header';
import BookmarkCard from '../components/bookmarkCard';
import BookmarkForm from '../components/bookmarkForm';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

function Bookmarks() {
  const data = useLoaderData();
  const [newBookmark, setNewBookmark] = useState('');

  function handleNewBookmark() {
    setNewBookmark(<BookmarkForm />);
  }

  return (
    <div className="top-container">
      <Header onButtonClick={handleNewBookmark} />
      <div className="bookmarks-container">
        {newBookmark}
        {data.map(bookmarkData => {
          return <BookmarkCard key={bookmarkData._id} data={bookmarkData} />;
        })}
        <div className="end-list-spacer"></div>
      </div>
    </div>
  );
}

export default Bookmarks;
