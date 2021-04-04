export const addItem = 'ADD_ITEM'
export const delItem = 'DEL_ITEM'

export interface IItemData {
  value: string
  id: number
}
export interface IAddItemAction {
  type: typeof addItem
  data: IItemData
}

export interface IDelItemAction {
  type: typeof delItem
  data: number
}

export type ActionTypes = IAddItemAction | IDelItemAction

export interface IState {
  list: IItemData[]
}
