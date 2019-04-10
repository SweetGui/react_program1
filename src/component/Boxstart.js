import React from 'react';
import "../css/Boxstart.css"
var mystyle={
    width:"50%",
    height:46,
    marginTop:65,
}
class Boxstart extends React.Component{
    render(){
        return(
          <div style={mystyle}>
              <a hrf="https://react.docschina.org/docs/hello-world.html" className="Box-start">快速开始</a>
          </div>
        );
    }
}
export default Boxstart;