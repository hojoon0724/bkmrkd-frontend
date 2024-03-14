import Header from '../components/header';
import BookmarkCard from '../components/bookmarkCard';
import BookmarkForm from '../components/bookmarkForm';
import { useLoaderData } from 'react-router-dom';

function Bookmarks() {
  const data = useLoaderData();

  return (
    <div className="top-container">
      <Header />
      <div className="bookmarks-container">
        <BookmarkForm />
        <BookmarkCard data={data} />
        <div className="end-list-spacer"></div>
      </div>
    </div>
  );
}

export default Bookmarks;
