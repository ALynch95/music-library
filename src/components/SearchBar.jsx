import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

export default function SearchBar() {
  const {term, handleSearch} = useContext(SearchContext)

  return (
    <form onSubmit={(e) => handleSearch(e, term.current.value)}>
      <input ref={term} type="text" placeholder="Search for music" />
      <button type="submit" >Search</button>
    </form>
  )
}