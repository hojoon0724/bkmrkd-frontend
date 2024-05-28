import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = process.env.REACT_APP_URL;

function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  let user = {
    username: username,
    password: password,
  };

  async function handleSignup(e) {
    e.preventDefault();

    const response = await fetch(`${URL}/user/signup`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status >= 400) {
      alert(response.statusText);
      navigate('/');
    }

    navigate('/');
  }

  async function handleLogin(e) {
    e.preventDefault();
    // console.log(user);

    const response = await fetch(`${URL}/user/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status >= 400) {
      alert(response.statusText);
      navigate('/');
    }

    const data = await response.json();
    // console.dir(data);
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.username);

    navigate('/dashboard');
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-form-buttons">
          <button type="submit" onClick={handleSignup}>
            Sign Up
          </button>
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
