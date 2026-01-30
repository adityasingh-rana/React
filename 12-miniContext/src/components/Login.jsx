import {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password});
  }
  const {setUser} = useContext(UserContext);
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  return (
    <div>
      <h2>Login:</h2>
      <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username' /> &nbsp;
      <input type="text"
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/> &nbsp;
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
