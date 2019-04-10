import React from 'react';
import FooterrightBoxtitle from './FooterrightBoxtitle';
import FooterrightBoxlist from './FooterrightBoxlist';
var mystyle={
    width:368,
    height:256,
    // background:"blue",
    // display:"flex",
    
    

}
   

class FooterrightBoxdiv extends React.Component{
    render(){
        return(
           <div style={mystyle}>
              <FooterrightBoxtitle index={this.props.index}/>
              <FooterrightBoxlist  index={this.props.index}/>

           </div>
        );
    }
}
export default FooterrightBoxdiv;