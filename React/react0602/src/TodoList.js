import React, { Component } from 'react';
import store from './store'
import { initListaction, getImpChangeAction, getPopListAction, getChangeListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import Axios from 'axios';

// 容器组件 逻辑处理
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.btnClick = this.btnClick.bind(this)
    this.itemClick = this.itemClick.bind(this)

    console.log(store.getState())
    store.subscribe(this.storeChange)//监听store 改变 当store 改变会执行回调函数
  }

  btnClick () {

    const action = getChangeListAction()
    store.dispatch(action)
  }


  handleInputChange (e) {
    const action = getImpChangeAction(e.target.value)
    store.dispatch(action) // 订阅action

  }

  storeChange () {
    this.setState(store.getState())
  }

  itemClick (index) {
    console.log(index)
    // 第一步 创建action
    const action = getPopListAction(index)
    store.dispatch(action)
  }

  componentDidMount () {
    // 在组件已经被渲染到 DOM 中后运行 vue mounted
    Axios('/list.json')
      .then(res => {
        if (res.status === 200) {
          const action = initListaction(res.data)
          store.dispatch(action)
        }
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}

        handleInputChange={this.handleInputChange}
        btnClick={this.btnClick}
        itemClick={this.itemClick}
      >
      </TodoListUI>
    )
  }
}
export default TodoList