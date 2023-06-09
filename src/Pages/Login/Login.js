import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { useNavigate } from 'react-router-dom';
import mysvg from '../../SVG/back.svg';
import './Login.css';

export default function Login() {
    const navigation=useNavigate();

    const handelLogin=()=>{
        navigation('/home');
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
                    <label for='id' className='labels'>Company ID</label>
                    <span className='icons'><BusinessCenterIcon /></span>
                    <input className='inputfield' type='text' id='id' required></input>
                    <label className='labels' for='password'>Password</label>
                    <span className='icons'><LockOpenIcon  /></span>
                    <input className='inputfield' type='password' id='password' required ></input>
                    <div className='rememberBox'>
                    <input className='checkBox' type="checkbox" id="remember"/>
                    <label for="remember">Remember Me </label>
                    </div>
                    <button type='submit'>Sign in</button>
                    </form>
                    <p>Don't have Account ?<span className='signUpLink' onClick={()=>navigation('/signup')} > Sign Up</span> </p>
                </div>        
            </div>
        </div>
    )
}
