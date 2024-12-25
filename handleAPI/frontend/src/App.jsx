import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [products, error, loading, search, setSearch] = customReactQuery('/api/products?search=')
  // if (error) {
  //   return <h1>Something went wrong</h1>
  // }
  // if (loading) {
  //   return <h1>Loading...</h1>
  // }
  return (
    <>
      <h1>Chai Aur API in React</h1>
      <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      <h2>Number of products are : {products.length}</h2>
    </>
  )
}

const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  useEffect(() => {
    const controller = new AbortController()  // avoids race condition 
    ;(async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(urlPath+search, {signal: controller.signal})
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request cancelled', error.message);
          return
        }
        setError(true)
        setLoading(false)
      }
    })()
    return () => {
      controller.abort()
    }
  }, [search])
  return [products, error, loading, search, setSearch]
}

export default App