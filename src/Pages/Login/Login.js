import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { useNavigate } from 'react-router-dom';
import mysvg from '../../SVG/back.svg';
import './Login.css';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {setLogin} from '../../slice/authSlice'
import { loginUser } from '../../services/auth.service';
export default function Login() {
    const dispatch =useDispatch();
    const [msg,setMsg]=useState("")
    const navigation=useNavigate();
    const [data,setData]=useState({email:"",password:""})
    const handelOnChange=(e)=>{
        if(msg!=="")
        {
            setMsg("")
        }
        const {name,value}=e.target;
        setData({...data,[name]:value});
    }

    const handelLogin= async (e)=>{
        e.preventDefault()
        try {
            // console.log(data);
            const res=await loginUser(data)
            console.log(res);
            if(res.status===200)
            {
                dispatch(setLogin({email:data.email}))
                navigation('/home');
            }
            if(res.status===204)
            {
                setMsg("User Not Found!!")
            }
            setData({email:"",password:""})
            console.log(res)
        } catch (error) {
            setData({...data,password:""});
            setMsg("Wrong Password!!!")
            console.log(error.response)
        }
        //
    }
    
    return (
        <div className='Window'>
            <div className='signInBox'>
                <div className='Logo'> <img src={mysvg} alt='img' /><span> my Logo</span></div>
                <div className='headingText'>
                    <h1>Sign Into</h1>
                    <h1>Your Account</h1>
                </div>
                <div className='inputBox'>
                    <form onSubmit={handelLogin}>
                    <label htmlFor='id' className='labels'>Email</label>
                    <span className='icons'><BusinessCenterIcon /></span>
                    <input className='inputfield'  value={data.email} name='email'  type='text' id='id' onChange={handelOnChange} required></input>
                    <label className='labels' htmlFor='password'>Password</label>
                    <span className='icons'><LockOpenIcon  /></span>
                    <input className='inputfield'  value={data.password} name='password' type='password' onChange={handelOnChange} id='password' required ></input>
                    <div style={{color:"red"}}><span>{msg}</span></div>
                    <div className='rememberBox'>
                    {/* <input className='checkBox' type="checkbox" id="remember"/>
                    <label htmlFor="remember">Remember Me </label> */}
                    </div>
                    <button type='submit'>Sign in</button>
                    </form>
                    <p>Don't have Account ?<span className='signUpLink' onClick={()=>navigation('/signup')} > Sign Up</span> </p>
                </div>        
            </div>
        </div>
    )
}
