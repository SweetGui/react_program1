import React from 'react';
import FooterrightBoxdiv from './FooterrightBoxdiv';

var mystyle={
    width:737,
    height:465,
    color: "#fff",
    // background:"pink",
    position: "relative",
    top: -464,
    left: 478,
    display:"flex",
    flexWrap:"wrap",
}
   

class FooterrightBox extends React.Component{
    render(){
        return(
           <div style={mystyle}>
               <FooterrightBoxdiv index="0"/>
               <FooterrightBoxdiv index="1"/>
               <FooterrightBoxdiv index="2"/>
               <FooterrightBoxdiv index="3"/>
           </div>
        );
    }
}
export default FooterrightBox;