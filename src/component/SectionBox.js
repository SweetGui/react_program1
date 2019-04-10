import React from 'react';
import SectionTitle from './SectionTitle';
import SectionText from './SectionText';
var mystyle = {
    width:"30%",
    height:"100%",
    padding:10,
    boxSizing:"boeder-box",
    flexDirection:"column",
    // background:"pink",
    display:"flex",
}
class SectionBox extends React.Component{
    render(){
        return(
           <div style={mystyle}>
              <SectionTitle index={this.props.index }/>
              <SectionText index={this.props.index }/>
           </div>
        );
    }
}
export default SectionBox;