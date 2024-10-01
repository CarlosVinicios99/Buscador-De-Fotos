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
  const [fotoAmpliada, setFotoAmpliada] = useState(null)
  const [activateSearch, setActivateSearch] = useState(false)

  const fetchData = async ({query, category}) => {

    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

    if(query || category){
      let searchQuery = query

      if(query && category){
        searchQuery = `${query} ${category}`
      }
      else if(category){
        searchQuery = category
      }

      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          client_id: apiKey,
          query: searchQuery
        }
      })

      setFotos(response.data.results)
      return 
    }

    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      params: {
        client_id: apiKey,
        count: 10
      }
    })

    setFotos(response.data)
  }

  useEffect(() => {
    fetchData({query, category})
  }, [])

  useEffect(() => {
    if(activateSearch){
      fetchData({query, category})
      setActivateSearch(false)
    }
  }, [activateSearch])

  return (
    <div className="container">
      <Searchbar setQuery={setQuery} setCategory={setCategory} setActivateSearch={setActivateSearch}/>
      <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada}/>
      {fotoAmpliada && (<FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada}/>)}
    </div>
  )
}

export default App
