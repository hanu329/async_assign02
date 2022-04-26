import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Toggler} from "./conponents/Toggler.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Toggler />
    </div>
  )
}

export default App
