import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 当state 或者 props 发生改变 都会引发 render 函数 执行
// 父组件的render 被执行时 子组件的render 也会执行
class TodoItem extends Component {
  constructor(props) {
    console.log('props', props)
    super(props)
    this.state = {
      value: props.value,
      idx: props.index
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount () {
    // 在组件已经被渲染到 DOM 中后运行 vue mounted
    // console.log('componentDidMount')
  }
  componentWillUnmount () {
    // 当该组件在页面中 剔除前执行
    // console.log('componentWillUnmount 当该组件在页面中 剔除前执行 ')
  }
  componentWillMount () {
    // 在组件已经被渲染到 DOM 中前运行 vue beforemounted
    // console.log('componentDidMount')
  }
  // 1 要是从父组件接收参数
  // 2 子组件已经存在于父组件 
  componentWillReceiveProps () {
    // console.log('componentWillReceiveProps todiitem')
  }


  // 避免子组件 以父组件的render 更新 而导致子组件的render无谓更新
  shouldComponentUpdate (nextProps, nextState) {
    // 在组件组件更新前 疑问句  是否只渲染一次  类似vue的 v-once
    // console.log('shouldComponentUpdate 在组件组件更新前')
    return nextProps.value !== this.props.value
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
    console.log('render')
    // JSX -> createElement -> 虚拟DOM(js对象) -> 真实DOM
    return (
      <div onClick={this.handleClick}>{this.props.test}-{this.props.value}</div>
    )
    // return <div><span>nihao</span></div>
    // return React.createElement('div', { 'test': 1 }, React.createElement('span', {}, 'nihao'))
  }
  handleClick () {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }

}

TodoItem.propTypes = { // 对传入的值进行 强校验
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  value: PropTypes.string,
  test: PropTypes.string.isRequired  // 必传
}
TodoItem.defaultProps = { // 默认值
  test: 'nihap'
}
export default TodoItem