import React from 'react'
import Typewriter from 'typewriter-effect';

 function About() {
  return (
    <>
     <div id="about" className='about'>

<div className="image">
<div
  id="carouselExampleInterval"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="./Images/coder1.jpg" height={"450"} width={400} className="d-block w-100" alt="..."  style={{borderRadius:"50px"}} />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="./Images/coder2.jpg" height={450} width={400} className="d-block w-100" alt="..."  style={{borderRadius:"50px"}} />
    </div>
    <div className="carousel-item">
      <img src="./Images/coder3.jpg" height={450} width={400} className="d-block w-100" alt="..."  style={{borderRadius:"50px"}}/>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


</div>

{/*  Text Here */}

        <div className="text">
    <h1 style={{fontSize:"50px", marginTop:'50px' }}>Hii Recruiter's ;</h1>
    <div style={{ fontSize:"50px"}}>
        <Typewriter
  options={{
    strings: [ 'My Name is "Nihal Shukla". ' ,'I Am Front-End Web Developer ;' ],
    autoStart: true,
    loop: true,
  }}
/>
</div><br />
 <i style={{fontSize:"20px"}}><b style={{marginTop:"30px"}}> Career's Objective :</b> <br />
 * Demonstrated ability to work collaboratively in team environments, effectively communicating ideas and contributing to project success.</i><br />
<i style={{fontSize:"20px"}}> * Dedicated to ongoing learning and professional development to stay current with <br />emerging technologies and industry trends.</i><br />
<i style={{fontSize:"20px"}}> * Committed to continuous learning and growth in the ever-evolving field of frontend development.</i>





        </div>
     </div>

    </>
  )
}

export default About;