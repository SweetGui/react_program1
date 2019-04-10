import React from 'react';
import "../css/Headerinput.css"
var mystyle={
    width:210,
    height:35,
    display:"inline-block",
    marginLeft:"188px",
     position: "relative",
     top: -23,
     border:"none",
    
}
var mystyle2={
    backgroundColor:"rgba(184,184,184,0.3)",
    width:210,
    height:32,
    display:"inline-block",
    marginLeft:"188px",
     position: "relative",
     top: -23,
     borderRadius: 3, 
}
class Headerinput extends React.Component{
    constructor(props){
    super(props);
    this.state={
        flag:true
    }
    this.inputOnBlur=this.inputOnBlur.bind(this);
    this. inputOnFocus=this.inputOnFocus.bind(this)
    }
    inputOnBlur(){
        this.setState({
         flag:true,
        })
      }
      inputOnFocus(){
        this.setState({
         flag:false,
        })
      }
    render(){
        return(
          <div style={this.state.flag?mystyle:mystyle2} >
               <div className="ipt-img"></div>
              <input  onBlur={this.inputOnBlur }  onFocus={this.inputOnFocus}  placeholder="在文档中搜索..." className="ipt"></input>
          </div>
        );
    }
}
export default Headerinput;