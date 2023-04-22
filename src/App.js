import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Memo from './pages/Memo'
import ToDo from './pages/ToDo'
import Reminder from './pages/Reminder'
import Memory from './pages/Memory'
import StoryBoard from './pages/StoryBoard'

import PrivateRoutes from './components/privateRoutes'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/" />

        <Route element={<PrivateRoutes />}>
          <Route path="memo" element={<Memo />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="todo" element={<ToDo />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="reminder" element={<Reminder />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="memory" element={<Memory />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="storyboard" element={<StoryBoard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
