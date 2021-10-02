import React, { useState, useEffect } from 'react'
import { fetchJson, searchChars } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'
import SearchBar from '../SearchBar/SearchBar'
import './People.css'


function People() {
  const [people, setPeople] = useState<PersonType[]>([])
  const [searchError, setSearchError] = useState('')
  const [peopleSearch, setPeopleSearch] = useState<PersonType[]>([])

  useEffect(() => {
    fetchJson<{ results: PersonType[] }>('people')
      .then(peopleResponse => setPeople(peopleResponse.results))
  }, [])

  const submitSearch = (query: string, e: {preventDefault: () => void}): void => {
    e.preventDefault()
    searchChars(query).then(data => setPeopleSearch(data.results))
  }

  return (
    <>
      <SearchBar onSubmit={submitSearch} />
      <div className='person-container'>
        {!searchError && !peopleSearch.length && people.map(person => <Person person={person} />)}
        {!searchError && peopleSearch.map(person => <Person person={person} />)}
        {searchError}
      </div>
    </>
  )
}

export default People
