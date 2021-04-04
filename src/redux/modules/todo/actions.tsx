import { Dispatch } from 'redux'
import { addItem, delItem, IItemData } from './types'

export const addItemAction = (data: IItemData) => ({
  type: addItem,
  data
})

export const delItemAction = (data: number) => ({
  type: delItem,
  data
})

export const delItemActionAsync = (data: number, time = 1000) => (
  dispatch: Dispatch
) => {
  setTimeout(() => {
    dispatch(delItemAction(data))
  }, time)
}
