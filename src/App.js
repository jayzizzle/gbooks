import React from 'react'
import { Rows, Row, Div, Label } from './common'

function App() {
  return (
    <>
      <Label size={5}>gBooks</Label>
      <Label size={2}>Powered By Google</Label>
      <Rows>
        <Row height={50} css="text-transform: uppercase;">
          Emily St. John Mandel
        </Row>
        <Row>Sally Rooney</Row>
      </Rows>
      <Div size={3}>Jon Zamora</Div>
      <Div size={1}>Summer 2022</Div>
    </>
  )
}

export default App
