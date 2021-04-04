import React from 'react'
import useHooks from './useHooks'

export default function Todo () {
  const { inputRef, list, add, delItem, delItemAsync } = useHooks()

  return (
    <div>
      <div className='input-wrap'>
        <input ref={inputRef} />
        <button onClick={add}>add</button>
      </div>
      <ul className='list-wrap'>
        {list.map((item, index) => (
          <li key={item.id + index}>
            <span>{item.value}</span>
            <button onClick={() => delItem(item)}>x</button>
            <button onClick={() => delItemAsync(item)}>x-async</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
