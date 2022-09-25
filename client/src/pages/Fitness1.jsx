import React, { useState, useEffect } from 'react'
import Card1 from '../Components/Cards/Card1'
import LatestArticle from './LatestArticles/LatestArticle';
import SideBar from './SideBar/SideBar';
// import { lifestyle } from "../HomeData";
// import { Fitness } from "../HomeData";
import Heading from '../Components/Heading/Heading'
import axios from 'axios';
const Fitness1 = () => {
  const [lifestyle, setLifestyle] = useState([]);
  const [Fitness, setFitness] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:7000/Fitness");
      setFitness(data.data);
      // console.log(data.data);
      
      const data1 = await axios.get("http://localhost:7000/lifestyle");
      setLifestyle(data1.data);
    }
    getData();
  }, [])
  return (
    <>
      <h1 className='titleName'>💪FITNESS💪</h1>
      <section className='container LatestSide'>

        <section className='music'>
          <Heading titleHeading='LATEST - FITNESS NEWS' />
          <div className='content'>
            {Fitness
              .filter((item) => item.category === "fitness")
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
        <SideBar titleHeading={'TOP-FITNESS POSTS'} />
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
export default Fitness1
