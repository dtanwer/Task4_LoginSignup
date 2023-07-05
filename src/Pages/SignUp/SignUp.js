import {useState} from 'react';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import './SignUp.css';
import '../Login/Login.css';
import mysvg from '../../SVG/back.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signUpUser } from '../../services/auth.service';

export default function SignUp() {
    const [data,setData]=useState({name:"",email:"",cnfPassword:"",password:""})
    const navigation=useNavigate();
    const [msg,setMsg]=useState("")

    const handelOnChange=(e)=>{
        if(msg!=="")
        {
            setMsg("");
        }
        const {name,value}=e.target;
        setData({...data,[name]:value})
        // console.log(data);
    }

    const handelSignUp=async(e)=>{
        e.preventDefault();
        if(data?.password===data?.cnfPassword)
        {
           try {
                const res=await signUpUser(data);
                console.log(res)
                if(res.status===209)
                {
                    setData({name:"",email:"",cnfPassword:"",password:""})
                    setMsg('user Alredy Exist!!');
                }
                else
                {
                    navigation('/');
                }
            
           } catch (error) {
            setData({name:"",email:"",cnfPassword:"",password:""})
            console.log(error)
           }
        }
        else
        {
            alert('password is Wrong')
        }
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
                <label htmlFor='id' className='labels'>Enter Name</label>
                <span className='icons'><Person2Icon /></span>
                <input className='inputfield' value={data.name}  name='name' type='text' id='id'  onChange={handelOnChange} required></input>
                <label htmlFor='email'  className='labels'>Enter Email</label>
                <span className='icons'><EmailIcon /></span>
                <input className='inputfield' value={data.email} type='email' name='email' id='email' onChange={handelOnChange} required></input>
                <label className='labels' htmlFor='password'>Enter Password</label>
                <span className='icons'><LockOpenIcon /></span>
                <input className='inputfield' value={data.password} name='password' type='password' id='password' onChange={handelOnChange} required></input>
                <label className='labels' htmlFor='cnfPassword'>Enter Confirm Password</label>
                <span className='icons'><LockOpenIcon  /></span>
                <input className='inputfield' value={data.cnfPassword} type='password' name='cnfPassword' id='cnfPassword' onChange={handelOnChange} required></input>
                <div style={{color:"red"}} ><span>{msg}</span></div>
                <button type='submit'>Sign Up</button>
                </form>
                <p>Already have Account ?<span className='signUpLink' onClick={()=>navigation('/')} > Login</span> </p>
            </div>        
        </div>
    </div>
  )
}
