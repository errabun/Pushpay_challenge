import { useState } from 'react'

function SearchBar() {

  const [query, setQuery] = useState('')

  const getQuery = (e: string) => {
    const inputData = query
  }

  const searchInput = (e: { target: { value: string } }) => {
    setQuery(e.target.value)
  }

  return (
    <div className='search-container'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='Search characters'
            name='query'
            value={query}
            onChange={event => searchInput(event)} >
          </input>
          <button className='submit-search' onClick={event => console.log(event)}>SEARCH</button>
        </form>
      </div>
  )
}

export default SearchBar