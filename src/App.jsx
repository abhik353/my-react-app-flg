import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter1 from './one/Counter1'
import Counter2 from './one/Counter2'
import UserProfile from './two/UserProfile'

function App() {

  return (
    <>
      <Counter1/>
      <Counter2/>
      <UserProfile userId={1} />
    </>
  )
}

export default App
