import React from 'react'
import '../Contact/Contact.css'
export default function Contact() {
  return (
    <div className="contact pt-4">
    <div className="container vh-100">
     <div className="contact-header">
     <h1 className='text-center'>CONTACT COMPONENT</h1>
      <div className="star">
      <div className="line"></div>
      <i class="fa-solid fa-star" style={{color:"#161d27"}}></i>
      <div className="line"></div>
      </div>
     </div>
     <div class="form-floating w-50 m-auto mt-5 ">
    <input type="text" id="floating_standard" class="form-control" placeholder=" " />
    <label htmlFor="floating_standard">User Name</label>
    </div>
     <div class="form-floating w-50 m-auto mt-5 ">
    <input type="text" id="floating_standard" class="form-control" placeholder=" " />
    <label htmlFor="floating_standard">User Age</label>
    </div>
     <div class="form-floating w-50 m-auto mt-5 ">
    <input type="text" id="floating_standard" class="form-control" placeholder=" " />
    <label htmlFor="floating_standard">User Email</label>
    </div>
     <div class="form-floating w-50 m-auto mt-5 ">
    <input type="text" id="floating_standard" class="form-control" placeholder=" " />
    <label htmlFor="floating_standard">User Password</label>
    <button className='mt-5 btn '>Send Messege</button>
    </div>
    </div>
  </div>
  )
}
