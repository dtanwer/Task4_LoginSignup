import React from 'react'
import logo from '../../SVG/homeLogo.svg'
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='NavBar'>
      <div className='homeHeading'> <img src={logo} alt='logo'/> <span>Lorem</span></div>
          <div className='leftNav'>
          <span>Home</span>
          <span>About</span>
          <span>Explain</span>
          <span>Suggestion</span>
          <span>Activity</span>
          <span>Community</span>
          </div>
          <div className='rightNav'>
            <div className='search'>
              <SearchIcon/>
              <input type='text' placeholder='Search'/>
            </div>
          </div>
      </div>
  )
}
