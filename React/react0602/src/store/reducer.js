import { INIT_LIST, CHANGE_LIST, CHANGE_INPUT, POP_LIST } from './actionTypes'

const defaultState = {//图书管理员的手册
  inputValue: '',
  list: []
}
// reducer 只能接受state 不能修改state
export default (state = defaultState, action) => {//上次的state 以及操作内容
  // console.log(state, action)
  const newState = JSON.parse(JSON.stringify(state)) // 深拷贝
  // state.inputValue = ''
  if (action.type === CHANGE_INPUT) {
    newState.inputValue = action.value
  }

  if (action.type === CHANGE_LIST) {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
  }

  if (action.type === POP_LIST) {
    newState.list.splice(action.value, 1)
  }

  if (action.type === INIT_LIST) {
    newState.list = action.data
  }
  return newState
}