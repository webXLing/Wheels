import { INIT_LIST, CHANGE_LIST, CHANGE_INPUT, POP_LIST } from './actionTypes'

export const getImpChangeAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const getPopListAction = (value) => ({
  type: POP_LIST,
  value
})

export const getChangeListAction = () => ({
  type: CHANGE_LIST
})

export const initListaction = (data) => ({
  type: INIT_LIST,
  data
})
