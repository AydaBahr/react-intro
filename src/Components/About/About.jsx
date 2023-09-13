import React from 'react'
import '../About/About.css'
export default function About() {
  return (
    <>
    
      <div className="about">
    <div className="container d-flex align-items-center justify-content-center vh-100">
       <div className="about-inner">
       <h1 className='text-center'>ABOUT COMPONENT</h1>
        <div className="star">
        <div className="line"></div>
        <i class="fa-solid fa-star" style={{color:"white"}}></i>
        <div className="line"></div>
        </div>
      <div className="row text-center">
      <div className="col-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
      <div className="col-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
      </div>
       </div>
      </div>
    </div>
    </>
  )
}
