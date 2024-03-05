import { useState } from 'react';
import { redirect } from 'react-router-dom';

const URL = process.env.REACT_APP_URL;

function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignup(e) {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password
    };
    const response = await fetch(`${URL}/user/signup`, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
  }
  async function handleLogin(e) {
    e.preventDefault();
    const userAuth = {
      username: username,
      password: password
    };
    console.log(userAuth);
    const response = await fetch(`${URL}/user/login`, {
      method: 'POST',
      body: JSON.stringify(userAuth),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    localStorage.setItem('token', data.token);
    return redirect('/dashboard');
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
