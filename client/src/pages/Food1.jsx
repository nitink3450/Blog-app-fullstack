import React, { useState, useEffect } from 'react'
import Card1 from '../Components/Cards/Card1'
import LatestArticle from './LatestArticles/LatestArticle';
import SideBar from './SideBar/SideBar';
// import { lifestyle } from "../HomeData";
// import { HealthyFood } from "../HomeData";
import Heading from '../Components/Heading/Heading'
import axios from 'axios';
const Food = () => {
  const [lifestyle, setLifestyle] = useState([]);
  const [HealthyFood, setHealthyFood] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:7000/HealthyFood");
      setHealthyFood(data.data);
      const data1 = await axios.get("http://localhost:7000/lifestyle");
      setLifestyle(data1.data);
    }
    getData();
  }, [])
  return (
    <>
      <h1 className='titleName'>🥗FOOD🥗</h1>
      <section className='container LatestSide'>

        <section className='music'>
          <Heading titleHeading='LATEST - FOOD NEWS' />
          <div className='content'>
            {HealthyFood
              .filter((item) => item.category === "food")
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
        <SideBar titleHeading={'TOP-FOOD POSTS'} />
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
export default Food;

