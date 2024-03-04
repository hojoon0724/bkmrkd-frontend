import { useState } from 'react';

const URL = process.env.REACT_APP_URL;

function Auth() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleSignup(e) {
    e.preventDefault();
    console.log(`handle signup ${URL}, username: ${username}`);
    console.log(`handle signup ${URL}, password: ${password}`);
  }
  function handleLogin(e) {
    e.preventDefault();
    console.log(`handle login ${URL}, username: ${username}`);
    console.log(`handle login ${URL}, password: ${password}`);
  }

  return (
    <div className="login-form-container">
      <form>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className="login-form-buttons">
          <input type="submit" value="Sign Up" onClick={handleSignup} />
          <input type="submit" value="Login" onClick={handleLogin} />
        </div>
      </form>
    </div>
  );
}

export default Auth;
