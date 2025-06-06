import { useState } from 'react';
import './App.css';
import Button from './common';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  // Initialize state with empty email and password
  const [data, setData] = useState({ email: '', password: '' });

  function handleSubmit() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if fields are empty
    if (!data.email || !data.password) {
      alert('Please fill in both email and password.');
      return;
    }

    // Check credentials
    if (
      userData &&
      data.email === userData.email &&
      data.password === userData.password
    ) {
      navigate('/Dashboard');
    } else {
      alert('Invalid credentials. Please register first.');
      navigate('/Registration');
    }
  }

  return (
    <div className="App">
      <h1>My Form</h1>
      <form>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <Button type="button" onclick={handleSubmit} name="Login" />
      </form>
    </div>
  );
}

export default Login;