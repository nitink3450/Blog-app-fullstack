import React from "react"
import { Link } from "react-router-dom";
import "./LatestArticle.css";
import '.././Home/LatestSide.css';
// import Slider from "react-slick"
// import Heading from "../../Components/Heading/Heading";
// import { LatestArticleData } from "../../HomeData"
import '../../App.css'
const LatestArticle = ({ item: { id, cover, date, category, title, desc } }) => {
  // console.log(desc);
  // console.log(title);
  // console.log(date);

  return (
    <>
      <Link className='a' to={`/singlepage/${id}`}>
        <div className='items'>
          <div className='box shadow flexSB flexDirection'>
            <div className='images'>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
            </div>
            <div className='text'>
              <h1 className='title'>{title.slice(0, 40)}...</h1>
              <div className='date'>
                <i class="fi fi-sr-calendar"></i>
                <label>{date}</label>
              </div>
              <p className='desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis, feugia...</p>
              {/* <p className='desc'>{desc.slice(0, 250)}...</p> */}
              <div className='comment'>
                <i class='fas fa-share'></i>
                <label>Share </label>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default LatestArticle;
