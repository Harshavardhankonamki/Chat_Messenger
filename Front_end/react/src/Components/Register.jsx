import { useState } from 'react';
import './Register.css'
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, {
                username,
                password
            });
            console.log("Registration successful:", response.data);
            alert("Registered Successfully");
        } catch (error) {
            console.error("Registration Error:", error);
            alert("Registration Failed");
        }

        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h2 className="title">Register Here !!</h2>
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
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit" className="register-button">Register</button>
                <div className="social-buttons">
                    <button type="button" className="social-button google-button">Sign with Google</button>
                    <button type="button" className="social-button facebook-button">Sign with FB</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
