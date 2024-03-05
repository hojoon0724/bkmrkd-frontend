const URL = process.env.REACT_APP_URL;

export const bookmarksLoader = async () => {
  const response = await fetch(`${URL}/dashboard`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  const bookmarks = await response.json();
  console.log(bookmarks);
  return bookmarks;
};
