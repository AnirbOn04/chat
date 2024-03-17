import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Implement your registration logic here

    console.log("Registering with:", fullName, email, username, password);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
          <MdDriveFileRenameOutline className="icon" />
        </div>

        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <MdEmail className="icon" />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <FaUserAlt className="icon" />
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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
