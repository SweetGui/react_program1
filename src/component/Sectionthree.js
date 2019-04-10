import React from 'react';
import Boxstart from "./Boxstart";
import Boxtech from "./Boxtech";
import "../css/Sectiontwoimg.css"

var mystyle={
    width:"100%",
    height:143,
    background: "#282c34",
    marginTop:60,
};
var mystyle2={
    height:53,
    position:"relative",
    top:50,
}

class Sectionthree extends React.Component{
    render(){
        return(
            <div style={mystyle}>
                 <div style={mystyle2}>
                    <Boxstart />
                    <Boxtech />
                </div>
              
             </div>
           
        );
    }
}
export default Sectionthree;