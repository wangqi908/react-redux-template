export const increment = 'INCREMENT'
export const addList = 'ADD_LIST'

export interface IIncrementData {
  num: number
}
export interface IIncrementAction {
  type: typeof increment
  data: IIncrementData
}

export interface IListData {
  name: number | string
  id: number
}
export interface AddListAction {
  type: typeof addList
  data: IListData
}

export type ActionTypes = AddListAction | IIncrementAction

export interface IState {
  num: number
  list: IListData[]
}
