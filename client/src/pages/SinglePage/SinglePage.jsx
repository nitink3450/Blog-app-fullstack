import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Home1Data } from "../../HomeData";
// import { lifestyle } from "../../HomeData";
// import { LatestArticleData } from "../../HomeData";
// import { tpost } from "../../HomeData";
// import { Fitness } from "../../HomeData";
// import { HealthyFood } from "../../HomeData";
// import { Technology1 } from "../../HomeData";
// import { HollyWood1 } from "../../HomeData";
// import { BollyWood1 } from "../../HomeData";
import Heading from "../../Components/Heading/Heading";
import Card1 from '../../Components/Cards/Card1';
import "../../Components/Side/Side.css";
import "./SinglePage.css";
import SideBar from '../../pages/SideBar/SideBar';
import NotFound from '../NotFound/NotFound';
import '../../pages/SideBar/SideBar';
import axios from 'axios';

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  // console.log(id);

  const [Home1Data, setHome1Data] = useState([]);
  const [lifestyle, setlifestyle] = useState([]);
  const [LatestArticleData, setLatestArticleData] = useState([]);
  const [tpost, settpost] = useState([]);
  const [Fitness, setFitness] = useState([]);
  const [HealthyFood, setHealthyFood] = useState([]);
  const [Technology1, setTechnology1] = useState([]);
  const [HollyWood1, setHollyWood1] = useState([]);
  const [BollyWood1, setBollyWood1] = useState([]);

  // console.log('id is',id);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:7000/");
      setHome1Data(data.data);
      const data1 = await axios.get("http://localhost:7000/lifestyle");
      setlifestyle(data1.data);
      const data2 = await axios.get("http://localhost:7000/LatestArticleData");
      setLatestArticleData(data2.data);
      const data3 = await axios.get("http://localhost:7000/tpost");
      settpost(data3.data);
      const data4 = await axios.get("http://localhost:7000/Fitness");
      setFitness(data4.data);
      const data5 = await axios.get("http://localhost:7000/HealthyFood");
      setHealthyFood(data5.data);
      const data6 = await axios.get("http://localhost:7000/Technology");
      setTechnology1(data6.data);
      const data7 = await axios.get("http://localhost:7000/HollyWood");
      setHollyWood1(data7.data);
      const data8 = await axios.get("http://localhost:7000/BollyWood");
      setBollyWood1(data8.data);
    }
    getData();
  }, [id]);
  useEffect(() => {
    const item =
      (Home1Data.find((item) => item.id === parseInt(id))) ||
      (lifestyle.find((item) => item.id === parseInt(id))) ||
      (LatestArticleData.find((item) => item.id === parseInt(id))) ||
      (tpost.find((item) => item.id === parseInt(id))) ||
      (Fitness.find((item) => item.id === parseInt(id))) ||
      (HealthyFood.find((item) => item.id === parseInt(id))) ||
      (Technology1.find((item) => item.id === parseInt(id))) ||
      (HollyWood1.find((item) => item.id === parseInt(id))) ||
      (BollyWood1.find((item) => item.id === parseInt(id)))
    window.scroll(0, 0)
    if (item) {
      setItem(item)
    }
  }, [Home1Data, LatestArticleData, tpost, lifestyle, Fitness, HealthyFood, Technology1, HollyWood1, BollyWood1, id])
  // console.log(item);

  return (
    <>
      {item ? (
        <main>
          <div className='container onePage'>
            <section className='mainContent details'>
              <h1 className='title'>{item.title}</h1>

              <div className='author'>
                <span>by</span>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='authorImg' />
                {/* {item.authorImg}  */}
                <p> {item.authorName} on</p>

                <label>{item.date}</label>

              </div>

              <div className='social'>
                <div className='socBox'>
                  <i className='fab fa-facebook-f'></i>
                  <span>SHARE</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-pinterest'></i>
                  <span>PINTEREST</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-twitter'></i>
                  <span>TWITTER</span>
                </div>
                <div className='socBox'>
                  <i className='fa fa-envelope'></i>
                  <span>MAIL</span>
                </div>
              </div>

              <div className='desctop'>
                {/* {item.desc.map((val) => { */}
                {/* return ( */}
                <>
                  <p>You audience. Least, the recently his repeat the this avarice for the have and was on would before the concise bedding were hall politely name be regretting have of even five of it the his are there again. Word seven designer far lady problem will have work with you to fully understand your business to achieve.</p>
                  {/* {val.para1} */}
                  <p>We work with clients big and small across a range of sectors and we utilize all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively to your promotional needs and we will work with you.</p>
                  {/* {val.para2} */}
                </>
                )
                {/* })} */}
              </div>
              <img src={item.cover} alt='coverImg' />
              {/* {item.desc.map((val) => ( */}
              <p>We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry.</p>
              {/* {val.para3} */}
              {/* ))} */}

              <div className='descbot'>
                {/* {item.details.map((data) => { */}
                {/* return ( */}
                <>
                  <h1>Starting a new company is easy</h1>
                  {/* {data.title} */}
                  <p>Our teams are up to date with the latest technologies, media trends and are keen to prove themselves in this industry and that’s what you want from an advertising agency, not someone who is relying on the same way of doing things that worked 10 years, 5 years or even a year ago.</p>
                  {/* {data.para1} */}
                </>
                {/* ) */}
                {/* })} */}
              </div>

              <div className='quote'>
                <i className='fa fa-quote-left'></i>
                {/* {item.details.map((data) => ( */}
                <p>Scarfs, still not this no with explains it me and option on the any options roasted when I and state can that an don't subjective of has his take on and in from royal everything took raising our have behind success you the mechanic.</p>
                {/* {data.quote} */}
                {/* ))} */}
              </div>

              <div className='desctop'>
                {/* {item.details.map((data) => { */}
                {/* return ( */}
                <>
                  <p>And, higher by agency; In from their in and we spirit, through merely and doctor's small him sounded a all now, with that put gift white highly geared that was left back as of or logged important. A over have the large try understanding the believe. Perfected been viewer. Shreds early willingly safely what passion the.</p>
                  {/* {data.para2} */}
                  <p>In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts. Needless to say it’s very important, content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase, this is sad but true.</p>
                  {/* {data.para3} */}
                </>
                {/* ) */}
                {/* })} */}
              </div>
            </section>
            <SideBar titleHeading={'TOP POSTS'} />
          </div>
          <section className='container'>
            <section className='popularPost life'>
              <Heading titleHeading='LIFE STYLE' />
              <div className='card1'>
                {lifestyle.map((item => {
                  return (<Card1 id={item.id} item={item} />)
                }))}
              </div>
            </section>
          </section>
        </main>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default SinglePage;
