import React from 'react';

var mystyle={
    fontSize:"60px",
    textAlign:"center",
    color:"#61DAFB",
    marginTop:"158px",
    fontWeight: 200
}
class BoxTitle extends React.Component{
    render(){
        return(
            <h2 style={mystyle}>
            React
       </h2>
        );
    }
}
export default BoxTitle;