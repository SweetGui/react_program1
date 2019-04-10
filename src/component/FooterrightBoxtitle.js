import React from 'react';
var StnArray= [
    "文档",
    "社区",
    "参考资料",
    "其他"
]
var mystyle={
    color: "#999",
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.08em",
    // marginBottom: 20,
}
   

class FooterrightBoxtitle extends React.Component{
    getTitle(){
        return StnArray[this.props.index]
    }
    render(){
        return(
           <h2 style={mystyle}>{this. getTitle()}</h2>
        );
    }
}
export default FooterrightBoxtitle;