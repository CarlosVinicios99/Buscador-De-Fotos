import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/FotoList'
import Searchbar from './components/Searchbar'

import './App.css'

import { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")

  const fetchData = async ({query, category}) => {

    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: apiKey
      }
    })

    console.log(response)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      <Searchbar/>
      <FotoList/>
      <FotoAmpliada/>
    </div>
  )
}

export default App
