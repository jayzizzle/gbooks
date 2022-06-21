import React, { useState, useEffect } from 'react'
import { Panels, Panel, Rows, Row, Label, color } from '../common'

const myFetchHero = new Promise(res => {
  const myData = [
    {
      name: 'Spidey',
      todos: [
        'Save the world.',
        'Dinner with MJ.',
        'Complete science project.',
      ],
    },
    {
      name: 'Miles',
      todos: ['Save Brooklyn.', 'Hide from my parents.', 'Finish Homework.'],
    },
    {
      name: 'Venom',
      todos: ['Find Spider-Man.', 'Defeat Carnage.'],
    },
  ]
  setTimeout(() => {
    res(myData)
  }, 100)
})

const myFetchVillain = new Promise(res => {
  const myData = [
    {
      name: 'Green Goblin',
      todos: ['Destroy Spider-Man.', 'Business meeting.', 'Create more serum.'],
    },
    {
      name: 'Venom',
      todos: ['Defeat Spider-Man.', 'Find Spider-Man.', 'Exercise.'],
    },
  ]
  setTimeout(() => {
    res(myData)
  }, 100)
})

const myFetch = () => {
  return myFetchHero
}

const List = ({ owner, todos, handleAdd, handleDelete }) => {
  const [text, setText] = useState('')
  return (
    <>
      <Label size={5} css="padding-top: 16px;" color={color.orange}>
        {owner}
      </Label>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}{' '}
            <button onClick={() => handleDelete(owner, i)}>Delete</button>
          </li>
        ))}
      </ul>
      <form>
        <input
          placeholder={`Add task for ${owner}`}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          onClick={e => {
            e.preventDefault()
            handleAdd(owner, text)
            setText('')
          }}
        >
          Submit
        </button>
      </form>
    </>
  )
}

const Demo = () => {
  const [data, setData] = useState(null)

  const handleAdd = (owner, todo) => {
    const copyData = { ...data }
    copyData[owner].todos.push(todo)
    setData(copyData)
  }

  const handleDelete = (owner, idx) => {
    const copyData = { ...data }
    copyData[owner].todos.splice(idx, 1)
    setData(copyData)
  }

  // useEffect(() => {
  //   Promise.all([myFetchHero, myFetchVillain]).then(res => {
  //     const lists = res.flat()
  //     const result = {}
  //     for (let i = 0; i < lists.length; i++) {
  //       const list = lists[i]
  //       if (!result[list.name]) {
  //         result[list.name] = list
  //       } else {
  //         for (let j = 0; j < list.todos.length; j++) {
  //           const items = result[list.name].todos
  //           const item = list.todos[j]
  //           if (!items.includes(item)) items.push(item)
  //         }
  //       }
  //     }
  //     setData(result)
  //   })
  // }, [])

  // useEffect(() => {
  //   myFetchHero.then(res => console.log(res))
  // }, [])

  useEffect(() => {
    Promise.all([myFetch(), myFetchVillain]).then(res => {
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

  return (
    <Panels vertical autoSize>
      <Panel>
        <Rows>
          <Row>
            <Label>To Do Lists</Label>
          </Row>
          <Row>
            {Object.values(data).map(list => (
              <List
                key={list.name}
                owner={list.name}
                todos={list.todos}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
              />
            ))}
          </Row>
        </Rows>
      </Panel>
    </Panels>
  )
}

export default Demo
