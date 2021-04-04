import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '@/redux/index'
import {
  addItemAction,
  delItemAction,
  delItemActionAsync
} from '@rm/todo/actions'
import { IItemData } from '@rm/todo/types'

export default function useHooks () {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const list = useSelector((state: AppState) => state.todo.list)
  const add = () => {
    const inputDom = inputRef.current
    if (inputDom!.value === '') {
      alert('不可为空')
      return
    }
    const obj: IItemData = {
      value: inputDom!.value + Math.random(),
      id: Math.random()
    }
    dispatch(addItemAction(obj))
    inputDom!.value = ''
  }
  const delItem = (item: IItemData) => {
    dispatch(delItemAction(item.id))
  }
  const delItemAsync = (item: IItemData) => {
    dispatch(delItemActionAsync(item.id, 500))
  }

  return {
    inputRef,
    list,
    add,
    delItem,
    delItemAsync
  }
}
