import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import seedData from '../seedData';

const URL = process.env.REACT_APP_URL;

function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const seed = seedData;

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

    if (user.username === 'tester') {
      console.log('tester login active');
      for (let i in seed) {
        console.log(seed[i]);
      }
    }

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
    console.dir(data);
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
        <div className="tester-login-info">
          <h4>Tester Login</h4>
          <table className="tester-login-table">
            <tr>
              <td>Username:</td>
              <td>tester</td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>t</td>
            </tr>
          </table>
          <div className="server-note">The server could be asleep and can take up to 60 seconds to wake up.</div>
        </div>
      </form>
    </div>
  );
}

export default Auth;
