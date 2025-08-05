import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rating from './components/Rating.jsx'
import List from './components/List.jsx'

function App() {
  return (
    <>
		<Rating/>
		<List/>
    </>
  )
}

export default App
