import React, { useState } from 'react'

export const List = ({ list, handleDelete, handleAdd }) => {
  const [text, setText] = useState('')
  return (
    <div>
      <div>{list.name}</div>
      <div>
        <ul>
          {list.todos.map((todo, i) => (
            <li key={i}>
              {todo}{' '}
              <button onClick={() => handleDelete(list.name, i)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <form>
          <input value={text} onChange={e => setText(e.target.value)} />
          <button
            onClick={e => {
              e.preventDefault()
              handleAdd(list.name, text)
              setText('')
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
