import React, { useState, useEffect } from 'react'
import { Panels, Panel, Rows, Row, Div, Label, color } from '../common'

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

const List = ({ name, todos }) => {
  const [list, setList] = useState(todos)

  const handleDelete = idx => {
    const temp = list
    const newList = temp.splice(idx, 1)
    setList([newList])
  }

  return (
    <>
      <Label color={color.orange}>{name}</Label>
      <ul>
        {list.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

const Demo = () => {
  const [toDos, setToDos] = useState(null)

  useEffect(() => {
    Promise.all([myFetchHero, myFetchVillain]).then(res => {
      const data = []
      for (let i = 0; i < res.length; i++) {
        const subData = res[i]
        for (let j = 0; j < subData.length; j++) {
          data.push(subData[j])
        }
      }
      setToDos(data)
    })
  }, [])

  if (!toDos) return null

  return (
    <Panels vertical autoSize>
      <Panel>
        <Rows>
          <Row>
            <Label>To Do List</Label>
          </Row>
          <Row>
            {toDos.map(data => (
              <Div key={data.name} css="padding-top: 16px;">
                <List name={data.name} todos={data.todos} />
              </Div>
            ))}
          </Row>
        </Rows>
      </Panel>
    </Panels>
  )
}

export default Demo
