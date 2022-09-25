import React, { useState, useEffect } from 'react'
import Card1 from '../Components/Cards/Card1'
import LatestArticle from './LatestArticles/LatestArticle';
import SideBar from './SideBar/SideBar';
import axios from 'axios';
// import { lifestyle } from "../HomeData";
// import { BollyWood1 } from "../HomeData";
import Heading from '../Components/Heading/Heading'
const Bollywood = () => {
  const [lifestyle, setLifestyle] = useState([]);
  const [BollyWood1, setBollyWood1] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:7000/BollyWood");
      setBollyWood1(data.data);
      // console.log(data);
      
      const data1 = await axios.get("http://localhost:7000/lifestyle");
      setLifestyle(data1.data);
    }
    getData();
  }, [])
  return (
    <>
      <h1 className='titleName'>🎥BOLLYWOOD🎥</h1>
      <section className='container LatestSide'>

        <section className='music'>
          <Heading titleHeading='LATEST - BOLLYWOOD NEWS' />
          <div className='content'>
            {BollyWood1
              .filter((item) => item.category === "bollywood")
              .map((item => {
                return (<LatestArticle id={item.id} item={item} />)
              }))}
          </div>
        </section>

        {/* <section className='tpost '>
          <Social />
          <Heading titleHeading='TOP POSTS' /> */}
        {/* {tpost
          //  .filter((val) => val.category === "fun1")
            .map((item => {
              return ( */}
        <SideBar titleHeading={'TOP-BOLLYWOOD POSTS'} />
        {/* )
            }))} */}

        {/* </section> */}

      </section>

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
    </>
  )
}
export default Bollywood;
