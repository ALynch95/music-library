import { useState, useEffect, useRef } from 'react'
import './App.css';
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'

function App() {
  const [data, setData] = useState([])
  const [message, setMessage] = useState("Search for Music!")
  const searchInput = useRef('')

  const API_URL = "https://itunes.apple.com/search?term="

  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length) {
        setData(resData.results)
      } else {
        setMessage("Not found!")
      }
    }
    fetchData()
  }

  return (
    <div className="App">
      <SearchContext.Provider value={{ term: searchInput, handleSearch }}>
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;
