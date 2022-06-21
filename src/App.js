import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Demo from './Demo'
import Sandbox from './Sandbox'
import Home from './Home'

const App = () => (
  <Routes>
    <Route exact path="/demo" element={<Demo />} />
    <Route exact path="/sandbox" element={<Sandbox />} />
    <Route exact path="/" element={<Home />} />
  </Routes>
)

export default App
