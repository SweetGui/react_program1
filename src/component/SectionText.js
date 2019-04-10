import React from 'react';
var StnArray= [
   {
       one:"React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。",
       two:"以声明式编写UI，可以让你的代码更加可靠，且方便调试。"
   },
   {
    one:"创建好拥有各自状态的组件，再由组件构成更加复杂的界面。",
    two:"无需再用模版代码，通过使用JavaScript编写的组件你可以更好地传递数据，将应用状态和DOM拆分开来。"
   },
   {
    one:"无论你现在正在使用什么技术栈，你都可以随时引入 React 开发新特性。",
    two:"React 也可以用作开发原生应用的框架 React Native."
   }
]
   

class SectionText extends React.Component{
    getTitle(){
        return StnArray[this.props.index]
    }
    render(){
        return(
            <div>
                <p>{this. getTitle().one}</p>
                <p>{this. getTitle().two}</p>
            </div>
        );
    }
}
export default SectionText;