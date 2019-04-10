import React from 'react';
var StnArray= [
  {
    one:"除了使用外部传入的数据以外 (通过 this.props 访问传入数据), 组件还可以拥有其内部的状态数据 (通过 this.state 访问状态数据)。 当组件的状态数据改变时， 组件会调用 render() 方法重新渲染。",
    two:"使用 React 的时候也可以不使用 JSX 语法 你可以在 Babel REPL 查看 JSX 是如何被渲染成原生 JavaScript 代码的。"
  } ,
  {
      one:"使用 props 和 state, 我们可以创建一个简易的 Todo 应用。 下面这个示例中，我们使用 state 来保存现有的待办事项列表及用户的输入。 与此同时，我们也使用了内联的方法添加了事件处理函数，它们将通过事件代理被收集和调用。",
  },
  {
      one:"React 的使用非常灵活，并且提供了可以调用其他第三方框架或库的接口。下面这个示例就使用了一个用来渲染 markdown 语法，名为 remarkable 的库。它可以实时转换渲染 <textarea> 里的内容。",
  },
  {
      one: "React 的使用非常灵活，并且提供了可以调用其他第三方框架或库的接口。下面这个示例就使用了一个用来渲染 markdown 语法，名为 remarkable 的库。它可以实时转换渲染 <textarea> 里的内容。"
  },
   
  
  
]
var mystyle={
    width:382,

}
   

class SectiontwoText extends React.Component{
    getTitle(){
        return StnArray[this.props.index]
    }
    render(){
        return(
            <div style={mystyle}>
                <p>{this. getTitle().one}</p>
                <div>
                    <p>{this. getTitle().two}</p>
                </div>
            </div>
        );
    }
}
export default SectiontwoText;