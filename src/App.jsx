import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/FotoList'
import Searchbar from './components/Searchbar'
import axios from 'axios'

import './App.css'

import { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")
  const [fotos, setFotos] = useState([])

  const fetchData = async ({query, category}) => {

    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      params: {
        client_id: apiKey,
        count: 10
      }
    })

    setFotos(response.data)

    console.log(response)
  }

  useEffect(() => {
    fetchData(query, category)
  }, [])

  return (
    <div className="container">
      <Searchbar/>
      <FotoList fotos={fotos}/>
      <FotoAmpliada/>
    </div>
  )
}

export default App
