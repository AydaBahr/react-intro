import React from 'react'
import '../Home/Home.css'  
import pic from '../images/profile.svg'
// import star from '../images/star.png'
export default function Home() {
  return (
    <>
    <section className='home'> 
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="inner-home text-center align-items-center">
        <img className='w-50' src={pic} alt="" />
        <h1 className='title' >START FRAMEWORK</h1>
        <div className="star">
        <div className="line"></div>
        <i class="fa-solid fa-star" style={{color:"white"}}></i>
        <div className="line"></div>
        </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
    </section>
    </>
  )
}
