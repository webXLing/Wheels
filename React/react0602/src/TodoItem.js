import React, { Component } from 'react'
class TodoItem extends Component {
  constructor(props) {
    console.log('props', props)
    super(props)
    this.state = {
      value: props.value,
      idx: props.index,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  render () {
    console.log('render')
    return (
      <div onClick={this.handleClick}>{this.props.value}</div>
    )
  }
  handleClick () {
    // console.log(this.props)
    // console.log('this.props.deleteItem',this.props.deleteItem)
    const { deleteItem, index } = this.props
    // this.props.deleteItem(this.props.index)
    console.log('自足家 index', index)
    deleteItem(index)
  }

}
export default TodoItem