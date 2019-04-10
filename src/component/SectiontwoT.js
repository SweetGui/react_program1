import React from 'react';
import SectiontwoTitle from './SectiontwoTitle';
import SectiontwoText from './SectiontwoText';
var mystyle = {
    width:382,
    height:358,
    boxSizing:"boeder-box",
    // background:"blue",
}
class SectiontwoT extends React.Component{
    render(){
        return(
           <div style={mystyle}>
              <SectiontwoTitle index={this.props.index} />
              <SectiontwoText index={this.props.index }/>  
           </div>
        );
    }
}
export default SectiontwoT;