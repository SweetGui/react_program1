import React from 'react';
import FooterleftBox from './FooterleftBox';
import FooterrightBox from './FooterrightBox';
var mystyle = {
    width:"100%",
    height:512,
    background:"#20232a",
    color: "#ffffff" ,
    overflow:"hidden"
}
var mystyle2={
    width:"90%",
    margin:"0 auto",
    height:512,

}
class Footer extends React.Component{
    render(){
        return(
           <div style={mystyle}>
               <div style={mystyle2}>
               <FooterleftBox />
               <FooterrightBox />
               </div>
           </div>
        );
    }
}
export default Footer;