 import React from 'react';
 import Headerimg from './Headerimg';
 import HeaderTitle from './HeaderTitle';
 import Headertext from './Headertext';
 import Headerinput from './Headerinput';
 import Headersub from './Headersub';
 import "../css/Header.css"

 var mystyle={
     width:"100%",
     height:60,
     background:"#20232A",
     position:"fixed"
 }
 var mystyle2={
     width:"90%",
     height:40,
     margin:"0 auto",
     position:"relative",
     top:10,

 }
 class Header extends React.Component{
     render(){
         return(
             <div style={mystyle}>
                <div style={mystyle2}>
               <Headerimg/>
               <HeaderTitle  />
               <Headertext  />
               <Headerinput />
               <Headersub />
              
              
               </div>

             </div>
         )
     }
 }
 export default Header;