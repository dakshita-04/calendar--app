import React from "react";
import CalendarMain from "./CalenderMain.js";
import FormMain from "./FormMain.js";
import BootstrapCard from "./Image.js";


export default function App() {
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
    <div style={{
      width: '80%',
      height: '80%',
      backgroundColor: 'white',
      border: '1px solid gray',
      boxShadow:'5px 10px 18px #888888',
      borderRadius: '5px',
      padding: '20px'
    }}>
    <div >
    <div className="row">
      <div className="col-md-4">
     <BootstrapCard/>
      </div>
      <div style={{
        borderLeft:"1px solid gray",
        height: "635px",
        position:"absolute",
        marginTop:"-20px",
        marginLeft:"400px"
      }}>
      </div>
      
      <div className="col-md-6">
        <div className="calendar-container">
        <FormMain/>
        </div>
      </div>
      <div className="col-md-2">

      </div>
    </div>
  </div>
    </div>
   
    </div>
  );
}
