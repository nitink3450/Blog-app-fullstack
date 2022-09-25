import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card1 from '../Components/Cards/Card1'
import LatestArticle from './LatestArticles/LatestArticle';
import SideBar from './SideBar/SideBar';
// import { lifestyle } from "../HomeData";
// import { Technology1 } from "../HomeData";
import Heading from '../Components/Heading/Heading'
const Technology = () => {
  const [lifestyle, setLifestyle] = useState([]);
  const [Technology1, setTechnology1] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:7000/Technology");
      setTechnology1(data.data);
      const data1 = await axios.get("http://localhost:7000/lifestyle");
      setLifestyle(data1.data);
    }
    getData();
  }, [])
  return (
    <>
    <h1 className='titleName'>🔭TECHNOLOGY🔭</h1>
             <section className='container LatestSide'>

        <section className='music'>
          <Heading titleHeading='LATEST - TECHNOLOGY NEWS' />
          <div className='content'>
            {Technology1
              .filter((item) => item.category === "technology")
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
        <SideBar titleHeading={'TOP-TECH POSTS'} />
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
export default Technology;

