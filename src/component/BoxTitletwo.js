import React from 'react';
var mystyle={
    fontSize:"30px",
    textAlign:"center",
    color:"#fff",
    fontWeight: 200,
    position:"relative",
    marginTop: -30
    
}
class BoxTitletwo extends React.Component{
    render(){
        return(
            <h1 style={mystyle}>
            用于构建用户界面的 JavaScript 库
       </h1>
        );
    }
}
export default BoxTitletwo;