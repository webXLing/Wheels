import React, { Component } from 'react'

class Test extends Component {
  render () {
    console.log('子组件 render')
    return <div>{this.props.content}</div>
  }
}
export default Test