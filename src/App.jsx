import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import AppRouter from './router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  <Navbar />
    <AppRouter />
    </>
  )
}

export default App
