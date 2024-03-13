function Hello() {
  let username = localStorage.getItem('username');
  return (
    <div className="user-name">
      Hello, <span className="username">{username}</span>{' '}
    </div>
  );
}

export default Hello;
