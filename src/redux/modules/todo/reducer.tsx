import { addItem, delItem, ActionTypes, IState } from './types'
const initState: IState = {
  list: [
    {
      id: 0,
      value: 'zs'
    },
    {
      id: 1,
      value: 'ls'
    }
  ]
}

export default function reducer (state = initState, action: ActionTypes) {
  switch (action.type) {
    case addItem: {
      const data = action.data
      const list = [...state.list, data]
      return {
        ...state,
        list
      }
    }
    case delItem: {
      const id = action.data
      const index = state.list.findIndex(item => item.id === id)
      const list = [...state.list]
      list.splice(index, 1)
      return {
        ...state,
        list
      }
    }

    default:
      return state
  }
}
