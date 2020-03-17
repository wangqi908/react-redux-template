import { ADD, INCREMENT } from '@/store/actions/actionTypes'

const initState = {
  num: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, num: state.num + action.payload }

    case INCREMENT:
      return { ...state, num: state.num - action.payload }

    default:
      return state
  }
}
