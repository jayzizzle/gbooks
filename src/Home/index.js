import React, { useState } from 'react'
import { Rows, Row } from '../common'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <Rows css="background: red;">
      <Row>Search for your next read.</Row>
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
