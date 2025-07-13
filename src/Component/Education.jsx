import React from 'react';



function Education() {

  return (

    <>
    <div id="education"className="education">
      {/* Graduation */}
      <div className="graduation">
<div className="college-pic">
<div
  id="carouselExampleFade"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
     <img src='./Images/dsmnru.jpeg' height={320} width={330}/>
    </div>
    <div className="carousel-item">
     <img src='./Images/collage3.jpeg' height={320} width={330}/>
    </div>
    <div className="carousel-item">
     <img src='./Images/collage5.jpg' height={320} width={330}/>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
<div className="session"><i><b>B.Tech</b>[Mechanical Engg.] 2019 to 2023</i> </div>
<div className="marks"> Obtained Mark's 8.27/10CGPA</div>
</div>


{/* Intermediate */}
<div className="intermediate">
<div className="college-pic">
<div
  id="carouselExampleControlsNoTouching"
  className="carousel slide"
  data-bs-touch="false"
  data-bs-interval="false"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
     <img src='./Images/intermediate school.jpeg' height={320} width={330}/>
    </div>
    <div className="carousel-item">
     <img src='./Images/12th2.jpg' height={320} width={330}/>
    </div>
    <div className="carousel-item">
     <img src='./Images/12th.jpg' height={320} width={330}/>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControlsNoTouching"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControlsNoTouching"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
<div className="session"> <i><b>XIIth</b> from 2017 to 2018 in PCM</i> </div>
<div className="marks">  Obtained 60 Percent Mark's</div>

</div>

{/* Matriculation */}
<div className="Matriculation">
<div className="college-pic">
<div
  id="carouselExampleControlsNoTouching"
  className="carousel slide"
  data-bs-touch="false"
  data-bs-interval="false"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
     <img src='./Images/10th school.jpeg' height={320} width={330}/>
    </div>
    <div className="carousel-item">
     <img src='./Images/10th2.jpg' height={320} width={330}/>
    </div>
    <div className="carousel-item">
     <img src='./Images/10th3.webp' height={320} width={330}/>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControlsNoTouching"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControlsNoTouching"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
<div className="session"> <i><b>Xth</b> Completed in 2016 from Science </i></div>
<div className="marks"> Obtained Mark's 8.4/10 CGPA</div>

</div>

    </div>
    
    </>
  )
}

export default Education;