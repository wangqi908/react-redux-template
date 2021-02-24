import { INCREMENT, DECREMENT } from '../actionTypes'

const initData = {
  num: 0
}

export default function countReducer(state = initData, action) {
  const { type, data } = action

  switch (type) {
    case INCREMENT: {
      const { val } = data
      const { num } = state
      return { num: num + val }
    }
    case DECREMENT: {
      const { val } = data
      const { num } = state
      return { num: num - val }
    }

    default:
      return state
  }
}
