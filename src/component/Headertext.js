import React from 'react';
import "../css/Headertext.css"

var mystyle={
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
   
    fontWeight: 300,
    display:"inline-block",
 
}
var mystyle1={
  color:"#fff",
  width:400,
  height:40,
  display:"inline-block",
  position:"relative",
  marginLeft: 90,
  top:-23,
}
class Headertext extends React.Component{
 
    render(){
        return(
                <div style={mystyle1}>
                   <h2 style={mystyle}>文档</h2>
                   <h2 style={mystyle}>教程</h2>
                   <h2 style={mystyle}>社区</h2>
                   <h2 style={mystyle}>博客</h2>
                </div>  
        );
    }
}
export default Headertext;