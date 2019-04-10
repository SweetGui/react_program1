import React from 'react';
var StnArray= [
    "声明式",
    "组件化",
    "一次学习，随处编写"
]
var mystyle={
    color: "#6d6d6d",
    fontSize: 24,
    fontWeight: 200,
    // marginBottom: 20,
}
   

class SectionTitle extends React.Component{
    getTitle(){
        return StnArray[this.props.index]
    }
    render(){
        return(
           <h2 style={mystyle}>{this. getTitle()}</h2>
        );
    }
}
export default SectionTitle;