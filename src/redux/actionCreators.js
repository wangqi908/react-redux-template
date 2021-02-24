import { INCREMENT, DECREMENT } from './actionTypes'

export const incrementAction = (data) => ({ type: INCREMENT, data })
export const decrementAction = (data) => ({ type: DECREMENT, data })

export const incrementActionAsync = (data, time = 1000) => (dispatch) => {
  return setTimeout(() => {
    dispatch(incrementAction(data))
  }, time)
}
