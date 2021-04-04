import { Dispatch } from 'redux'
import { increment, IIncrementData, IListData, addList } from './types'

export const incrementAction = (data: IIncrementData) => ({
  type: increment,
  data
})
export const addListAction = (data: IListData) => ({
  type: addList,
  data
})
export const incrementActionAsync = (data: IIncrementData, time = 1000) => (
  dispatch: Dispatch
) => {
  setTimeout(() => {
    dispatch(incrementAction(data))
  }, time)
}
