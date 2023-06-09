import React from 'react';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import './SignUp.css';
import '../Login/Login.css';
import mysvg from '../../SVG/back.svg';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const navigation=useNavigate();
    const handelSignUp=()=>{

    }
  return (
    <div className='Window' >
        <div className='signInBox bigBox'>
            <div className='Logo'> <img src={mysvg} alt='img' /> <span> my Logo</span></div>
            <div className='headingText'>
                <h1>SignUp</h1>
            </div>
            <div className='inputBox'>
                <form onSubmit={handelSignUp}>
                <label for='id' className='labels'>Enter Name</label>
                <span className='icons'><Person2Icon /></span>
                <input className='inputfield' type='text' id='id' required></input>
                <label for='email' className='labels'>Enter Email</label>
                <span className='icons'><EmailIcon /></span>
                <input className='inputfield' type='email' id='email' required></input>
                <label className='labels' for='password'>Enter Password</label>
                <span className='icons'><LockOpenIcon /></span>
                <input className='inputfield' type='password' id='password' required></input>
                <label className='labels' for='cnfPassword'>Enter Confirm Password</label>
                <span className='icons'><LockOpenIcon  /></span>
                <input className='inputfield' type='password' id='cnfPassword' required></input>
                <button type='submit'>Sign Up</button>
                </form>
                <p>Already have Account ?<span className='signUpLink' onClick={()=>navigation('/')} > Login</span> </p>
            </div>        
        </div>
    </div>
  )
}
