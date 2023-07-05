import React from 'react';
import './index.css'
// import { Typography } from 'antd';
import DateAndTime from './DateAndTime';
import Nature from './Nature';

const BannerTemp=({data,noData})=>{
  return (
    <div className="banner">
      {!noData &&<DateAndTime className='top' data={data}/>}
      {!noData &&<Nature className='top' data={data}/>}
     
      </div>
  )
}

export default BannerTemp