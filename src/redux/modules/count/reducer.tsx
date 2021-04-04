import { increment, addList, ActionTypes, IState } from './types'
const initState: IState = {
  num: 1,
  list: []
}

export default function reducer (state = initState, action: ActionTypes) {
  switch (action.type) {
    case increment: {
      const data = action.data
      return {
        ...state,
        num: data.num + state.num
      }
    }
    case addList: {
      const data = action.data
      const list = [...state.list, data]
      return {
        ...state,
        list
      }
    }

    default:
      return state
  }
}
