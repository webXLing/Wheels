import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

// Fragment 占位符   类似于template  react 16
class TodoList extends Component {
  constructor(props) {
    super(props) //将参数 传给 父类
    this.state = {
      impValue: '',
      lists: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtn = this.handleBtn.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render () {
    return (//括号的作用是 可以jsx语法 分行写  
      <Fragment>
        <label htmlFor='input'>请输入内容</label>
        <input
          id='input'
          value={this.state.impValue}
          onChange={this.handleInputChange} />
        <button
          onClick={this.handleBtn}>提交</button>
        <ul>
          {this.getItem()}
        </ul>
      </Fragment>
    )
  }
  getItem () {
    return this.state.lists.map((item, index) => {
      return (
        // <li key={index} onClick={this.handleDelete.bind(this,index)}>{item}</li>
        // <li
        //   key={index}
        //   onClick={this.handleDelete.bind(this, index)}
        //   dangerouslySetInnerHTML={{ __html: item + '元' }}
        // >
        // </li>
        //能够解析 html 但是谨防xss 攻击
        <TodoItem
          value={item}
          key={index}
          index={index}
          deleteItem={this.handleDelete} />
      )
    })
  }

  handleBtn () {
    // console.log(this)
    // this.setState({
    //   lists: [...this.state.lists, this.state.impValue],
    //   impValue: ''
    // })

    this.setState((prevState) => ({//prevState 修改前的 state的 值
      lists: [...prevState.lists, prevState.impValue],
      impValue: ''
    }))
  }

  handleDelete (index) {
    console.log('this', this)
    // let arr = [...this.state.lists]
    // arr.splice(index, 1)
    // this.setState({
    //   lists: arr
    // })
    console.log('index', index)
    this.setState((prevState) => {
      const lists = [...prevState.lists]
      console.log('lists q', lists)
      lists.splice(index, 1)
      console.log('lists h', lists)
      return { lists }
    })
  }

  // 监听 input
  handleInputChange (e) {
    // console.log('this', this)
    // console.log('handleInputChange', e.target)
    // console.log('handleInputChange', e.target.value)
    // this.state.impValue = e.target.value
    let value = e.target.value
    this.setState(() => ({  //新的 异步写法
      impValue: value
    }))
    // this.setState({
    //   impValue: e.target.value
    // })
  }
}
export default TodoList