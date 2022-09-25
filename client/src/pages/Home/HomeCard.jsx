import React from "react"
import { Link } from "react-router-dom"
import '../../App.css'

const HomeCard = ({ item: { id, cover, category, title, authorName, time } }) => {
  return (
    <>
    
      <div className='box'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <span className='category'>{category}</span>
          <Link className ='a' to={`/SinglePage/${id}`}>
            <h1 className='titleBg'>{title}</h1>
          </Link>
          <div className='author flex'>
            <span>by {authorName}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default HomeCard;
