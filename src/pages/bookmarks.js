import Header from '../components/header';
import BookmarkCard from '../components/bookmarkCard';
import BookmarkForm from '../components/bookmarkForm';
import { useLoaderData } from 'react-router-dom';

function Bookmarks() {
  const data = useLoaderData();
  function handleEditSwitch() {
    console.log(`edit switch function run ${data._id}`);
  }

  return (
    <div className="top-container">
      <Header />
      <div className="bookmarks-container">
        <BookmarkForm />
        {data.map((bookmarkData) => {
          return <BookmarkCard key={bookmarkData._id} data={bookmarkData} onEditClick={handleEditSwitch} />;
        })}
        <div className="end-list-spacer"></div>
      </div>
    </div>
  );
}

export default Bookmarks;
