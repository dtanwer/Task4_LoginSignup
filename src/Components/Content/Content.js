import React from 'react';
import './Content.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import c1 from '../../SVG/circle1.svg';
// import c2 from '../../SVG/circle2.svg';
// import c3 from '../../SVG/circle3.svg';
// import c4 from '../../SVG/circle4.svg';
export default function Content() {
    return (
        <div className='Content'>
            <div className='leftContent'>
                <div className='bigContent'>
                    <h1>Lorem</h1>
                    <h1>Ipsum Dolor</h1>
                </div>
                <div className='smallContent'>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.</p>
                </div>
                <div className='SearchContent'>
                    <input type='text' placeholder='Lorem ipsum dolor sit'/>
                    <button><ArrowForwardIcon/></button>
                </div>
            </div>
            <div className='rightContent'>
                
            </div>
        </div>
    )
}
