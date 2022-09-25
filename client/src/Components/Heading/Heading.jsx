import React from "react"
import "./Heading.css"

const Heading = ({ titleHeading }) => {
  return (
    <>
      <div className='heading'>
        <h6>{titleHeading}</h6>
      </div>
    </>
  )
}

export default Heading;