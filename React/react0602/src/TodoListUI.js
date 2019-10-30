import React, { Component, Fragment } from 'react';
import { Button, Input, List } from 'antd';
// 可以将只有render的UI组件 直接写成 无状态组件  性能更高
const TodoListUI = (props) => {
  return (
    <Fragment>
      <Input
        placeholder={props.inputValue} style={{ width: '300px' }}
        onChange={props.handleInputChange}
        value={props.inputValue}
      />
      <Button type="primary" onClick={props.btnClick}>
        提交
    </Button>
      <List
        style={{ width: '300px' }}
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={(index) => { props.itemClick(index) }}>{item}</List.Item>)}
      />
    </Fragment>
  )
}
// UI 组件
// class TodoListUI extends Component {
//   render () {
//     return (
//       <Fragment>
//         <Input
//           placeholder={this.props.inputValue} style={{ width: '300px' }}
//           onChange={this.props.handleInputChange}
//           value={this.props.inputValue}
//         />
//         <Button type="primary" onClick={this.props.btnClick}>
//           提交
//       </Button>
//         <List
//           style={{ width: '300px' }}
//           size="large"
//           header={<div>Header</div>}
//           footer={<div>Footer</div>}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (<List.Item onClick={(index) => { this.props.itemClick(index) }}>{item}</List.Item>)}
//         />
//       </Fragment>
//     )
//   }
// }
export default TodoListUI