import React from 'react'
import './content.css'

const Content = ({Name}) => {
  return (
    <div className="content-container">
    <h3>{Name}</h3>
    <div className='sub-desc'><p className='color-home'>Home/</p><p>{Name}</p></div>
    </div>
  )
}

export default Content