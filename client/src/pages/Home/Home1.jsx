import React, { useState, useEffect } from "react";
// import { Home1Data } from "../../HomeData";
// import { lifestyle } from "../../HomeData";
// import { LatestArticleData } from "../../HomeData";
import Card1 from '../../Components/Cards/Card1';
import Heading from '../../Components/Heading/Heading'
import "./Home1.css";
import '../../App.css';
import './LatestSide.css';
import SideBar from '../SideBar/SideBar';
import HomeCard from "./HomeCard";
import LatestArticle from "../LatestArticles/LatestArticle";
import '../../Components/Cards/Card1.css';
import axios from 'axios';
const Home1 = () => {
  const [Home1Data, setHome1Data] = useState([]);
  const [lifestyle, setLifestyle] = useState([]);
  const [LatestArticleData, setLatestArticleData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:7000/");
      setHome1Data(data.data);      
      const data1 = await axios.get("http://localhost:7000/lifestyle");
      setLifestyle(data1.data);
      const data2 = await axios.get("http://localhost:7000/LatestArticleData");
      setLatestArticleData(data2.data);
    }
    getData();
  }, [])


  return (
    <>
      <section className='hero'>
        <div className='container'>
          {Home1Data.map((item) => {
            return (
              <>
                <HomeCard key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>

      <section className='container'>
        <section className='popularPost life'>
          <Heading titleHeading='LIFE STYLE' />
          <div className='card1'>
            {lifestyle
              .filter((item) => item.category1 === "card1")
              .map((item => {
                return (<Card1 id={item.id} item={item} />)
              }))}
          </div>
        </section>
      </section>

      <section className='container LatestSide'>

        <section className='music'>
          <Heading titleHeading='LATEST ARTICLES' />
          <div className='content'>
            {LatestArticleData
              .filter((item) => item.category === "fun")
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
        <SideBar titleHeading={'TOP POSTS'} />
        {/* )
            }))} */}

        {/* </section> */}

      </section>

      <section className='container'>
        <section className='popularPost life'>
          <Heading titleHeading='OTHER NEWS' />
          <div className='card1'>
            {lifestyle
              .filter((item) => item.category1 === "card2")
              .map((item => {
                return (<Card1 id={item.id} item={item} />)
              }))}
          </div>
        </section>
      </section>
    </>
  )
}

export default Home1;
