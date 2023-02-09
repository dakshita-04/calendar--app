
import React from 'react';
import image from "./QIT Logo.png"
import Avatar from "@material-ui/core/Avatar";
import { FaClock } from "react-icons/fa";
import { FaVideo } from "react-icons/fa"; 
import {FaArrowLeft} from "react-icons/fa"
import Card from "./ImageMain";
import FormMain from "./FormMain"
import { Link } from "react-router-dom";


const Form =()=>{
    return(
        <div >
        <Card>
        <div className="Container">
        <div className="row">
        <div className="col-md-5">
        <Link to="/">
        <FaArrowLeft style={{fontSize:"25px",color:"#337AB7",marginLeft:"30px"}}/>
        
        </Link>
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
        <FormMain/>
        </div>
      </div>
      </div>
        </Card>
        </div>
    );
};
export default Form;
