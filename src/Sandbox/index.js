import React, { useState, useEffect } from 'react'
import { myFetchHeroFn, myFetchVillainFn } from './common'
import { List } from './List'

const Demo = () => {
  const [data, setData] = useState(null)

  const handleDelete = (owner, idx) => {
    const copyData = { ...data }
    copyData[owner].todos.splice(idx, 1)
    setData(copyData)
  }

  const handleAdd = (owner, todo) => {
    const copyData = { ...data }
    copyData[owner].todos.push(todo)
    setData(copyData)
  }

  useEffect(() => {
    Promise.all([myFetchHeroFn(), myFetchVillainFn()]).then(res => {
      const lists = res.flat()
      const result = {}
      for (let i = 0; i < lists.length; i++) {
        const list = lists[i]
        if (!result[list.name]) {
          result[list.name] = list
        } else {
          for (let j = 0; j < list.todos.length; j++) {
            const items = result[list.name].todos
            const item = list.todos[j]
            if (!items.includes(item)) items.push(item)
          }
        }
      }
      setData(result)
    })
  }, [])

  if (!data) return null
  console.log(data)

  return (
    <div>
      <div>Todos</div>
      {Object.values(data).map(list => (
        <List
          key={list.name}
          list={list}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
      ))}
    </div>
  )
}

export default Demo
