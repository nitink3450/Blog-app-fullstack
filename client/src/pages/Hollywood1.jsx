import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card1 from '../Components/Cards/Card1'
import LatestArticle from './LatestArticles/LatestArticle';
import SideBar from './SideBar/SideBar';
// import { lifestyle } from "../HomeData";
// import { HollyWood1 } from "../HomeData";
import Heading from '../Components/Heading/Heading'
const Hollywood = () => {
  const [lifestyle, setLifestyle] = useState([]);
  const [HollyWood1, setHollyWood1] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:7000/HollyWood");
      setHollyWood1(data.data);
      // console.log(data);
      const data1 = await axios.get("http://localhost:7000/lifestyle");
      setLifestyle(data1.data);
    }
    getData();
  }, [])
  return (
    <>
      <h1 className='titleName'>🎞️HOLLYWOOD🎞️</h1>

      <section className='container LatestSide'>

        <section className='music'>
          <Heading titleHeading='LATEST - HOLLYWOOD NEWS' />
          <div className='content'>
            {HollyWood1
              .filter((item) => item.category === "hollywood")
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
        <SideBar titleHeading={'TOP-HOLLYWOOD POSTS'} />
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
export default Hollywood;

