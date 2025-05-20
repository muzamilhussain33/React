import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);
     

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return (
        <div>
            <h2>Login</h2>
            <input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username" />
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" 
            placeholder="Password" />
            <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login