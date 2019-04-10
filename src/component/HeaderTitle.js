import React from 'react';
var mystyle={
   fontSize:"24px",
   color:"#61DAFB",
   display:"inline-block",
   position:"relative",
   top:-21,
   
}
var mystylediv={
    width:60,
    height:40,
    
    marginTop:5,
    marginLeft:"20px", 
    display:"inline-block",
}

class HeaderTitle extends React.Component{
   
    render(){
        return(
            <div style={mystylediv}>
           <h2 style={mystyle}>
                React
           </h2></div>
        );
    }
}
export default HeaderTitle;