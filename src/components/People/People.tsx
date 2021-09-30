import React from 'react'

import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'
import './People.css'

function People() {
  const [people, setPeople] = React.useState<PersonType[]>([])

  React.useEffect(() => {
    fetchJson<{ results: PersonType[] }>('people')
      .then(peopleResponse => setPeople(peopleResponse.results))
      .then(people => console.log(people))
  }, [])

  return (
    <div className='person-container'>
      {people.map(person => <Person person={person} />)}
    </div>
  )
}

export default People
