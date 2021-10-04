import React, { useState, useEffect } from 'react'
import { fetchJson, getPeopleByPage, searchChars } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'
import SearchBar from '../SearchBar/SearchBar'
import './People.css'

function People() {
  const [people, setPeople] = useState<PersonType[]>([])
  const [searchError, setSearchError] = useState('')
  const [peopleSearch, setPeopleSearch] = useState<PersonType[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchJson<{ results: PersonType[] }>('people')
      .then(peopleResponse => setPeople(peopleResponse.results))
  }, [])

  const submitSearch = (query: string, e: {preventDefault: () => void}): void => {
    e.preventDefault()
    searchChars(query).then(data => {
      setPeopleSearch(data.results); 
      if (!data.results.length) {setSearchError('No characters were found, please try again!')}
    })
  }

  const displayDifferentPage = async (direction: string) => {
    if(direction === 'next') {
      await getPeopleByPage(currentPage + 1).then(peopleResponse => {
        setPeople(peopleResponse.results); 
        setCurrentPage(currentPage + 1)
      })
    } else if (direction === 'previous') {
      await getPeopleByPage(currentPage - 1).then(peopleResponse => {
        setPeople(peopleResponse.results); 
        setCurrentPage(currentPage - 1)
      })
    }
  }

  return (
    <>
      <SearchBar onSubmit={submitSearch} />
      <div className='person-container'>
        {!searchError && !peopleSearch.length && people.map(person => <Person person={person} key={person.name} />)}
        {!searchError && peopleSearch.map(person => <Person person={person} key={person.name} />)}
        {searchError && <div className='error'>{searchError}</div>}
      </div>
      <div className='btn-nav'>
        {currentPage>1 && !searchError && 
          <button 
            onClick={() => displayDifferentPage('previous')}
            className='nav'
            >Previous Page
          </button>}
        {currentPage<9 && !searchError && 
          <button 
            onClick={() => displayDifferentPage('next')}
            className='nav'
          >Next Page 
          </button>}
          <p>{currentPage} of 9</p>
      </div>
  </>
  )
}

export default People
