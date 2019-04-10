import React from 'react';

var mystyle = {
    width:"90%",
    margin:"0 auto",
    // height:60,
    boxSizing:"boeder-box",
    borderTop:"1px solid #dedede",
   
}
class Sectionadd extends React.Component{
    render(){
        return(
           <div style={mystyle}>
              {/* <Sectionimg index={this.props.index} />
              <SectionTitle index={this.props.index }/>
              <SectionText index={this.props.index }/> */}
           </div>
        );
    }
}
export default Sectionadd;