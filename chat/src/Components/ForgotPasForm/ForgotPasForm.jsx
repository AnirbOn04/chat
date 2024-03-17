import React from 'react'
import { MdEmail } from "react-icons/md";

const ForgotPasForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Forgot Password</h1>

        <div className="input-box">
           <input type="text" placeholder="Email" required/>
           <MdEmail className="icon" />
        </div>

        <button type="submit">Send OTP</button>

      </form>
      
      </div>
  )
}

export default ForgotPasForm
