import React from 'react';
import SectionBox from './SectionBox';
var mystyle = {
    width:"90%",
    margin:"0 auto",
    marginTop:40,
    height:280,
    background:"#fff",
    display:"flex",
    justifyContent: "space-between",
    // margin:"20px auto 0"
}
class Section extends React.Component{
    render(){
        return(
           <div style={mystyle}>
               <SectionBox index="0"/>
               <SectionBox index="1"/>
               <SectionBox index="2"/>
           </div>
        );
    }
}
export default Section;