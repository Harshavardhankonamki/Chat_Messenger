/* eslint-disable no-unused-vars */
import  { useState } from 'react';
import axios from 'axios';
import './assets/Login.css'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        alert("Login successful")
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL }/api/auth/login`, { username, password });
            setUser({ id: response.data.userId, username });
            navigate("/chat"); // Redirect to the chat list after successful login
          } catch (error) {
            alert('Login failed');
          }
    };


    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="title">Login</h2>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;