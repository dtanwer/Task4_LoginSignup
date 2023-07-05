import React, { useEffect, useState } from 'react'
import './index.css';
// import bc from '../../SVG/background.svg'
import BannerTemp from '../../Components/BannerTemp'
import Temprature from '../../Components/Temprature';
import { getNewsFromApi } from '../../services/Post.service';
import { useDispatch } from 'react-redux';
import { setLogOut } from '../../slice/authSlice';
const Home = () => {
    const [cityInput,setCityInput]=useState("chandigarh");
    const [news, setNews] = useState({});
    const [noData, setNoData] = useState(false);
    const dispatch=useDispatch();
    const handelLogOut=()=>{
        dispatch(setLogOut());
    }
    useEffect(() => {
        const getNews = async () => {
            try {
                const res= await getNewsFromApi(cityInput);
                setNews(res.data);
                console.log(res.data)
            } catch (error) {
                setNoData(true);
                console.log(error)
            }
        }
        getNews();
        console.log(cityInput);

    }, [cityInput])
  
    return (
        <div className='hhome' >
            <button onClick={handelLogOut} className='button-64' >Logout</button>
            <div className="Cards">
                <BannerTemp data={news}  noData={noData} />
                <Temprature data={news} noData={noData} setNoData={setNoData} setCityInput={setCityInput} />
            </div>
        </div>

    )
}

export default Home