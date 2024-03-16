import Header from '../components/header';
import BookmarkCards from '../components/bookmarkCards';
import Footer from '../components/footer';
import { useLoaderData } from 'react-router-dom';

function Bookmarks() {
  const data = useLoaderData();

  return (
    <div className="page-wrapper">
      <div className="top-container">
        <Header />
        <div className="bookmarks-container">
          <BookmarkCards data={data} />
          <div className="end-list-spacer"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bookmarks;
