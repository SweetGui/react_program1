import React from 'react';
import "../css/FooterrightBoxtitle.css"
var StnArray= [
  { 
  one:"快速开始",
  two:"React 理念",
  three: "入门教程",
  four: "高级指引",
},
  {
  one:"Stack Overflow",
  two:"Discussion 论坛",
  three:"Reactiflux 聊天室",
  four:"Facebook",
  five:"Twitter"
  },
  {
      one:"会议",
      two:" 视频",
      three:"示例",
      four:"开发工具",
  },
  {
      one:"博客",
      two:"GitHub",
      three:"React Native",
      four:"致谢"
  },
]
var mystyle={
    fontSize: 17,
    fontWeight: 200,
}
   

class FooterrightBoxlist extends React.Component{
    getTitle(){
        return StnArray[this.props.index]
    }
    render(){
        return(
            <div>
           <h2 style={mystyle} className="footer-list">{this. getTitle().one}</h2>
           <h2 style={mystyle} className="footer-list">{this. getTitle().two}</h2>
           <h2 style={mystyle} className="footer-list">{this. getTitle().three}</h2>
           <h2 style={mystyle} className="footer-list">{this. getTitle().four}</h2>
           <h2 style={mystyle} className="footer-list">{this. getTitle().five}</h2>
           </div>

        );
    }
}
export default FooterrightBoxlist;