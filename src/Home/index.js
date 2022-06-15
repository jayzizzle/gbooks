import React, { useState } from 'react'
import { Rows, Row, Div, Label, color } from '../common'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <Rows css="padding: 8px;">
      <Row>
        <Label size={5} color={color.orange}>
          Welcome to OnRead
        </Label>
      </Row>
      <Row>
        <Div>Search for your next book.</Div>
      </Row>
      <Row>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </Row>
    </Rows>
  )
}

export default Home
