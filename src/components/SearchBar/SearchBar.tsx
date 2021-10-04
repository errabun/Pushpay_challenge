import { useState } from 'react'
import { OnSubmit } from '../../types'
import './SearchBar.css'

function SearchBar({ onSubmit }: OnSubmit): JSX.Element {

  const [query, setQuery] = useState('')

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
          <button className='submit-search' onClick={(e) => onSubmit(query, e)}>SEARCH</button>
        </form>
      </div>
  )
}

export default SearchBar
