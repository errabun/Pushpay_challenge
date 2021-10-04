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

  const displayNextPage = async () => {
    if(currentPage <= 9) {
      await getPeopleByPage(currentPage + 1).then(peopleResponse => {
        setPeople(peopleResponse.results); 
        setCurrentPage(currentPage + 1)
      })
    } 
    // else {
    //   const nextBtn: Button = document.getElementsByClassName('next')
    //   nextBtn.disabled = true
    // }
  }

  return (
    <>
      <SearchBar onSubmit={submitSearch} />
      <div className='person-container'>
        {!searchError && !peopleSearch.length && people.map(person => <Person person={person} key={person.name} />)}
        {!searchError && peopleSearch.map(person => <Person person={person} />)}
        {searchError}
      </div>
      <button 
        onClick={() => displayNextPage()}
        className='next'
      >
        See More Characters 
    </button>
  </>
  )
}

export default People
