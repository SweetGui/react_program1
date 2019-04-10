import React from 'react';
var mystyle={
    width:30,
    height:40,
    marginTop:"10px",
    position:"relative",
   top:-10,
   

}
class Headerimg extends React.Component{
    render(){
        return(
           <img style={mystyle} src="https://reactjs.org.cn/asset/img/logo.svg"/>
        );
    }
}
export default Headerimg;