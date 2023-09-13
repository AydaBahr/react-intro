import React, { useEffect, useState } from 'react'
import '../Portofolio/Portofolio.css'
import axios from 'axios';
import plus from '../images/plus.png'
export default function Portofolio() {
const [Movies , setMovies]= useState([])

 async function getMovies(){
  let { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=68a184884fbcea5921f1d5c7ca53f453`);
  setMovies(data.results)
 }
 useEffect(() => {
 getMovies()
 }, [])
 
  return (
    <>
    <div className="portofolio pt-4">
      <div className="container">
        <div className="header-portofolio">
        <h1 className='text-center'>PORTFOLIO COMPONENT</h1>
        <div className="star">
        <div className="line"></div>
        <i class="fa-solid fa-star" style={{color:"#161d27"}}></i>
        <div className="line"></div>
        </div>
        </div>

        <div className="row">
         {Movies.map((movie,index)=>
         
         <div key={index} className="card col-md-4 gy-4 shadow">
         <img className="w-100" src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} alt=""/>
          <img src={plus} alt="" className="plus" />
         </div>

         )}
        </div>
      </div>
    </div>
    
    </>
  )
}
