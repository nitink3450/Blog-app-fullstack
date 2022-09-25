import React from "react"
import { Link } from "react-router-dom";
import "./Card1.css";
const Card1 = ({ item: { id, cover, date, category, title } }) => {
  return (
    <>
      <Link className='a' to={`/singlepage/${id}`}>
        <div className='items'>
          <div className='box shadow'>
            <div className='images'>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div class='category category1'>
                <span>{category}</span>
              </div>
            </div>
            <div className='text'>
              <h1 className='title'>{title.slice(0, 40)}...</h1>
              <div className='date'>
                <i class="fi fi-sr-calendar"></i>
                <label>{date}</label>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Card1;
