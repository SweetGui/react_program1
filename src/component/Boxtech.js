import React from 'react';
import "../css/Boxtech.css"
var mystyle={
    width:"50%",
    height:23,
    position:"relative",
    top:-35,
    marginLeft:"50%",
    paddingLeft: 15,
    fontSize: 20,
    color: "#61dafb"
}
class Boxtech extends React.Component{
    render(){
        return(
          <div style={mystyle}>
              <a hrf="https://react.docschina.org/docs/hello-world.html" className="Box-tech">入门教程</a>
              <svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.53657 8.69699" className="css-b7q1rs"><path d="
        M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,
        0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,
        0,0,1,.18254,8.697Z
      " fill="currentColor"></path></svg>
          </div>
        );
    }
}
export default Boxtech;