import { ADD, INCREMENT } from '@/store/actions/actionTypes'

// 异步添加
export const addActionAsync = params => dispatch => {
  setTimeout(() => {
    return dispatch(addAction(params))
  }, 1000)
}

// 添加
export const addAction = payload => {
  return {
    type: ADD,
    payload
  }
}

// 减少
export const incrementAction = payload => {
  return {
    type: INCREMENT,
    payload
  }
}
