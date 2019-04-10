import React from 'react';
var StnArray= [
    "组件",
    "有状态组件",
    "应用",
    "在组件中使用第三方库"
]
var mystyle={
    color: "rgb(40, 44, 52)",
    fontSize: 25,
    // fontWeight: 200,
    marginBottom: 20,
}
   

class SectiontwoTitle extends React.Component{
    getTitle(){
        return StnArray[this.props.index]
    }
    render(){
        return(
           <h2 style={mystyle}>{this. getTitle()}</h2>
        );
    }
}
export default SectiontwoTitle;