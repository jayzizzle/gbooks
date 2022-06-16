import React, { useState } from 'react'
import { Panels, Panel, Rows, Row, Div, Label, color } from '../common'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <Panels vertical autoSize>
      <Panel dark>Dark</Panel>
      <Panel highlighted>Highlighted</Panel>
      <Panel flex>
        <Rows>
          <Row css="padding-top: 16px;">
            <Label size={5} color={color.orange}>
              Welcome to OnRead
            </Label>
          </Row>
          <Row>
            <Div size={1}>Powered by Google Books</Div>
          </Row>
          <Row css="padding-top: 32px;">
            <Div>Search for your next favorite book.</Div>
          </Row>
          <Row>
            <input
              placeholder="Station Eleven"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </Row>
        </Rows>
      </Panel>
      <Panel muted>Muted</Panel>
    </Panels>
  )
}

export default Home
