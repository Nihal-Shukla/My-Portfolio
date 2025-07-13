import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentSms, faEnvelope, faLocationCrosshairs, faLocationDot, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin, faSquareWhatsapp,  faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <>
    <div id='contact' className="contact">
<div className="contact1"><FontAwesomeIcon icon={faEnvelope} style={{color:"red", fontSize:50}} /> <i style={{fontSize:"15px"}}>nihalshukla67952@gmail.com</i> <br />
<FontAwesomeIcon icon={ faSquarePhone} style={{color:"green" , fontSize:50}}/> <i style={{fontSize:"20px"}}>8957632099</i>  <br /> 
<FontAwesomeIcon icon={ faCommentSms}  style={{color:"gray" ,fontSize:50}}/> <i style={{fontSize:"20px"}}>8957632099</i> <br/>
<FontAwesomeIcon icon={ faSquareWhatsapp} style={{color:"green" ,fontSize:50}}/> <i style={{fontSize:"20px"}}>8957632099</i> <br />

</div>
<div className="contact2"> 
<FontAwesomeIcon icon={ faLinkedin} style={{color:"blue" ,fontSize:50}}/> <i style={{fontSize:"20px"}}>Nihal Shukla</i> <br/>
<FontAwesomeIcon icon={ faTwitterSquare}style={{color:"blue" ,fontSize:50}} /> <i style={{fontSize:"20px"}}>Nihal Shukla</i><br/>
<FontAwesomeIcon icon={ faGithub} style={{color:"black" ,fontSize:50}}/> <i style={{fontSize:"20px"}}>Nihal Shukla </i><br/>
<FontAwesomeIcon icon={ faInstagram} style={{color:"red" ,fontSize:50}}/><i style={{fontSize:"20px"}}>18_Shukl@ Nih@l</i><br/>
  
</div>
<div className="contact3">
<FontAwesomeIcon icon={ faFacebook}  style={{color:"blue" ,fontSize:50}}/><i style={{fontSize:"20px"}}>Nihal Shukla</i><br/>

<FontAwesomeIcon icon={ faLocationCrosshairs} style={{fontSize:50}} /><i style={{fontSize:"20px"}}>Kasmere Gate , New Delhi</i><br/>
<FontAwesomeIcon icon={ faLocationDot} style={{fontSize:50}}/> <i style={{fontSize:"20px"}}>Aurai , Bhadohi</i><br />
<FontAwesomeIcon icon={ faYoutube}style={{color:"red" ,fontSize:50}} /><i style={{fontSize:"20px"}}>CR@ZY Engineers.</i>
</div>
    </div>

    </>
  )
}

export default Contact