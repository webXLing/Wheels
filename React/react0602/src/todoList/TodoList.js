import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import TodoItem from './TodoItem'
import Test from './Test'
import axios from 'axios'


// Fragment 占位符   类似于template  react 16
class TodoList extends Component {
  constructor(props) {
    super(props) //将参数 传给 父类
    this.state = {
      impValue: '',
      lists: [],
      inProp: true,
      itemList: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtn = this.handleBtn.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.addBtn = this.addBtn.bind(this)
  }
  componentDidMount () {

    axios.get('/api/todolist')
      .then(() => {
        console.log('请求成功')
      })
      .catch((res) => {
        console.log('请求失败')
      })
    // 在组件已经被渲染到 DOM 中后运行 vue mounted
    // console.log('componentDidMount')
  }
  componentWillMount () {
    // 在组件已经被渲染到 DOM 中前运行 vue beforemounted
    // console.log('componentDidMount')
  }
  componentWillReceiveProps () {
    // console.log('componentWillReceiveProps?????')
  }
  shouldComponentUpdate () {
    // 在组件组件更新前 疑问句
    // console.log('shouldComponentUpdate 在组件组件更新前')
    return true
  }

  componentWillUpdate () {
    // 在组件组件更新前 之前 在shouldComponentUpdate 返回true之后执行
    // console.log('componentWillUpdate 在组件组件更新前')
  }

  componentDidUpdate () {
    // 在组件组件更新后 执行 在render之后
    // console.log('componentDidUpdate 在组件组件更新后 执行')
  }

  render () {
    console.log('父组件 render')
    return (//括号的作用是 可以jsx语法 分行写  
      <Fragment>
        <CSSTransition
          in={this.state.inProp}
          timeout={1000}
          classNames="my-node"
          unmountOnExit
          onEntered={(el) => { el.style.color = 'blue' }}
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.toggleBtn.bind(this)}>toggle</button>
        <hr></hr>
        <TransitionGroup>
          {
            this.state.itemList.map((item, index) => {
              return (
                <CSSTransition
                  key={index}
                  timeout={1000}
                  classNames="my-node"
                  unmountOnExit
                  onEntered={(el) => { el.style.color = 'blue' }}
                  appear={true}
                >
                  <div >item</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.addBtn.bind(this)}>add Item</button>
        <hr></hr>
        <label htmlFor='input'>请输入内容</label>
        <input
          id='input'
          value={this.state.impValue}
          onChange={this.handleInputChange} />
        <button
          onClick={this.handleBtn}>提交</button>
        <ul ref={ul => this.ul = ul}>
          {this.getItem()}
        </ul>
        <Test content={this.state.impValue}></Test>
      </Fragment>
    )
  }

  addBtn () {
    this.setState((preState) => {
      return {
        itemList: [...preState.itemList, 'item']
      }
    })
  }

  toggleBtn () {
    console.log('this,', this)
    this.setState((preSate) => ({
      inProp: !preSate.inProp
    }))
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

    }), () => { console.log(this.state.lists.length) })
    console.log(this.state.lists.length)
    // console.log(this.ul.querySelectorAll('div'))
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
      // console.log('lists q', lists)
      lists.splice(index, 1)
      // console.log('lists h', lists)
      return { lists }
    })
  }

  // 监听 input
  handleInputChange (e) {
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