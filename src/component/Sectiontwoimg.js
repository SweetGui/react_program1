import React from 'react';
import "../css/Sectiontwoimg.css"

var mystyle={
    width: 786,
    height: 358,
    display: "inline-block",
    borderRadius: 10,
    position: "relative",
    left: 420,
    top: -358
};
var StnArray= [
    "https://i.loli.net/2019/03/25/5c98a08b35aff.png",
    "https://i.loli.net/2019/03/25/5c98a02186635.png",
    "https://i.loli.net/2019/03/25/5c98a00789239.png",
    "https://i.loli.net/2019/03/25/5c989fe1c77cd.png "
]

   

class Sectiontwoimg extends React.Component{
    getImg(){
        return StnArray[this.props.index]
    }
    render(){
        return(
            <div style={mystyle}>
               <img  src={this.getImg()} alt="" className="Sectiontwo-img"/>
             </div>
           
        );
    }
}
export default Sectiontwoimg;