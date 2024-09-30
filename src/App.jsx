import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/FotoList'
import Searchbar from './components/Searchbar'

import './App.css'

import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Searchbar/>
      <FotoList/>
      <FotoAmpliada/>
    </div>
  )
}

export default App
