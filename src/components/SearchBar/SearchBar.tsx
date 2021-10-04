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
            onChange={e => searchInput(e)} >
          </input>
          <button className='submit-search' onClick={(e) => onSubmit(query, e)}>Search</button>
          <button className='submit-search' onClick={() => setQuery('')}>Clear Search</button>
        </form>
      </div>
  )
}

export default SearchBar
