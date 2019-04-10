import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./component/Header";
import Box  from "./component/Box";
import Section  from "./component/Section";
import Sectiontwo  from "./component/Sectiontwo";
import Sectionadd  from "./component/Sectionadd";
import Sectionthree  from "./component/Sectionthree";
import Footer  from "./component/Footer";




ReactDOM.render(
    <div>
         <Header/>
         <Box />
         <Section />
         <Sectionadd />
         <Sectiontwo />
         <Sectionthree />
         <Footer/>
    </div>,
   
    document.getElementById('root')
    );
   
