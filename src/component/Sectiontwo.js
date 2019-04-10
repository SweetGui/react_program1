import React from 'react';
import SectiontwoBox from './SectiontwoBox';
var mystyle = {
    width:"90%",
    margin:"0 auto",
    background:"#fff",
    overflow: "hidden"
   
}
class Sectiontwo extends React.Component{
    render(){
        return(
           <div style={mystyle}>
               <SectiontwoBox index="0"/>
               <SectiontwoBox index="1"/>
               <SectiontwoBox index="2"/>
               <SectiontwoBox index="3"/>
           </div>
        );
    }
}
export default Sectiontwo;