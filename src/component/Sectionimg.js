import React from 'react';


var StnArray= [
    "https://reactjs.org.cn/asset/img/home/1.svg",
    "https://reactjs.org.cn/asset/img/home/1.svg",
    "https://reactjs.org.cn/asset/img/home/1.svg"
]
var mystyle={
    width:200,
    height:200
}
   

class Sectionimg extends React.Component{
    getImg(){
        return StnArray[this.props.index]
    }
    render(){
        return(
           <img style={mystyle} src={this.getImg()} alt=""/>
        );
    }
}
export default Sectionimg;