import React from 'react'
import './Footer.css';
import fb from '../../SVG/fb.svg'
import twitter from '../../SVG/twitter.svg'
import linkdin from '../../SVG/linkdin.svg'
import p from '../../SVG/p.svg'
export default function Myfooter() {
  return (
    <div className='homeFooter'>
      <div className='footerIcons'>
        <img src={fb} alt='img' />
        <img src={twitter}  alt='img'/>
        <img src={linkdin} alt='img' />
        <img src={p}  alt='img' />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  )
}
