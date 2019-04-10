import React from 'react';
import SectiontwoT from './SectiontwoT';
import Sectiontwoimg from './Sectiontwoimg';
var mystyle = {
    width:"100%",
    height:358,
    boxSizing:"boeder-box",
    marginTop:60,
    // background:"pink",
}
class SectiontwoBox extends React.Component{
    render(){
        return(
           <div style={mystyle}>
              <SectiontwoT index={this.props.index} />
              <Sectiontwoimg index={this.props.index }/> 
             
              
           </div>
        );
    }
}
export default SectiontwoBox;