import React from 'react';
import image from "./QIT Logo.png"
import Avatar from "@material-ui/core/Avatar";
import { FaClock } from "react-icons/fa";
import { FaVideo } from "react-icons/fa"; 
import Card from "./ImageMain";
import CalendarMain from "./CalenderMain.js";
import { Link } from "react-router-dom";
import Button from "devextreme-react/button";

const BootstrapCard = () => {
  return (
    <div >
    <Card>
    <div className="Container">
    <div className="row">
    <div className="col-md-5">
    <img src={image} alt="" style={{width:"200px",marginLeft:"60px",marginTop:"30px"}}/>
    <hr/>
    <div style={{marginLeft:"30px",paddingBottom:"80px"}}>
    <Avatar
    style={{ border: "1px solid gray", marginTop: 50,width:"70px",height:"70px" }}
    alt=""
    src=""
  />
  <h5 style={{fontWeight:600,
  fontSize: "18px",color:"#737373"}}>Keyur Modi</h5>
  <h2 style={{fontWeight:700}}>Discovery Call with Quantum IT</h2>
  <div style={{marginTop:"30px"}}>
      <p style={{fontSize:"15px",fontWeight:700,color:"#737373"}}> <FaClock style={{ fontSize: '15px',marginRight:"10px"}}/>30 min</p>
      <p style={{fontSize:"15px",fontWeight:700,color:"#737373"}}> <FaVideo style={{ fontSize: '15px',marginRight:"10px"}}/>Web conferencing details provided upon confirmation.
      </p>
      </div>
    </div>
    </div>
    <div className="col-md-7">
    <CalendarMain/>
    </div>
    <Link to="./form" style={{textDecoration:"none"}}>
    <Button
    width={160}
    height={40}
    text="Confirm"
    type="default"
    stylingMode="contained"
    style={{marginLeft:"200px",fontSize:"15px",marginTop:"50px",marginBottom:"50px"}}
  ></Button>
    </Link>
  </div>
  </div>
    </Card>
    </div>
  );
};

export default BootstrapCard;
