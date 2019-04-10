import React from 'react';
import BoxTitle from './BoxTitle';
import BoxTitletwo from './BoxTitletwo';
import Boxstart from './Boxstart';
import Boxtech from './Boxtech';
 
 var backone = {
    width:"100%",
     height:500,
    display: "inline-block",
    backgroundImage: "url(https://reactjs.org.cn/asset/img/hero_bg.png)",
    backgroundSize: "cover"
}
class Box extends React.Component{
    render(){
        return(
           <div style={backone}>
                <BoxTitle  />
                <BoxTitletwo/>
                <Boxstart />
                <Boxtech />
           </div>
        );
    }
}
export default Box;