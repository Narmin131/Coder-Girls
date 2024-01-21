import React from 'react'
import "./style.scss"
const Banner = ({title, bgImage}) => {
  return (
    <section style={{backgroundImage:`url(${bgImage})`}} className='banner-section'>
               <h1>{title}</h1>
    </section>
  )
}

export default Banner