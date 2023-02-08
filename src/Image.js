import React from 'react';
import image from "./QIT Logo.png"
import Avatar from "@material-ui/core/Avatar";
import { FaClock } from "react-icons/fa";
import { FaVideo } from "react-icons/fa"; 


const BootstrapCard = () => {
  return (
    <div >
    <img src={image} alt="" style={{width:"200px"}}/>
    <hr style={{
      color: 'gray',
      borderColor: 'gray',
      height: '1px',
      width:"105%",
      position:"absolute",
      marginLeft:"-20px"
    }}/>
    <Avatar
    style={{ border: "1px solid gray", marginTop: 50,width:"70px",height:"70px" }}
    alt=""
    src=""
  />
  <h5 style={{fontWeight:400,
  fontSize: "18px",color:"#737373"}}>Steve Fracasso</h5>
  <h2 style={{fontWeight:700}}>Discovery Call with Quantum IT</h2>
  <ul style={{listStyle:"none",marginTop:"30px"}}>
  <li style={{fontSize:"15px",fontWeight:400}}><FaClock style={{ fontSize: '15px',marginRight:"20px"}}/>15 min</li>
  <li style={{fontSize:"15px",fontWeight:400}}><FaVideo style={{ fontSize: '15px',marginRight:"20px"}}/>Web conferencing details provided upon confirmation.</li>
  </ul>
    </div>
  );
};

export default BootstrapCard;
