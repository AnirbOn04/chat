import React, { useState } from "react";
import './LoginForm.css';
// import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your login logic here
        console.log("Logging in with:", email, password);
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                        />
                        Remember me
                    </label>
                    <Link to="/forgot">Forgot Password</Link>
                </div>

                <button type="submit">Login</button>
                <div className="register-link">
                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
