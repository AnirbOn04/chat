import React from 'react'
import './RegisterForm.css';
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";


const RegisterForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Registeration</h1>

        <div className="input-box">
           <input type="text" placeholder="Full Name" required/>
           <MdDriveFileRenameOutline className="icon"/>
        </div>
        
        <div className="input-box">
           <input type="text" placeholder="Email" required/>
           <MdEmail className="icon" />
        </div>

        <div className="input-box">
           <input type="text" placeholder="Username" required/>
           <FaUserAlt className="icon"/>
        </div>

        <div className="input-box">
           <input type="text" placeholder="Password" required/>
           <FaLock className="icon"/>
        </div>

        <button type="submit">Sign Up</button>

      </form>
    </div>
  )
}

export default RegisterForm