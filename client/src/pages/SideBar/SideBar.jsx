import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
// import { tpost } from "../../HomeData"
import Heading from "../../Components/Heading/Heading"
import "./SideBar.css"
import Social from '../../Components/Cards/Social';
const SideBar = ({ titleHeading }) => {
  // console.log(titleHeading);
  const [tpost, settpost] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:7000/tpost");
      settpost(data.data);
      // console.log(data);
    }
    getData();
  }, [])
  return (
    <>
      <section className='tpost '>
        <Social />
        <Heading titleHeading={titleHeading} />
        {tpost.map((val) => {
          return (

            <Link className='a' to={`/singlepage/${val.id}`}>
              <div className='box shadow flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1 className='title'>{val.title.slice(0, 35)}...</h1>
                  <span>a day ago</span>
                </div>
              </div>
            </Link>
          )
        })}

      </section>
    </>
  )
}

export default SideBar
