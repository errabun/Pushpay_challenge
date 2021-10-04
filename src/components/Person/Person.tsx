import { PersonType } from '../../types';
import { useEffect, useState } from 'react';
import { getPersonInfo } from '../../api';
import './Person.css'

interface PersonProps {
  person: PersonType
}

function Person({ person }: PersonProps) {

  const [personInfo, setPersonInfo] = useState<PersonType>()

  useEffect(() => {
    (async () => {
      await getPersonInfo(person).then(data => setPersonInfo(data)) 
    })()
  }, [person])

  return (
    <div className='person-card'>
      <h2 className='title'>{person.name}</h2>
      <h3> Character Info:</h3>
      <li>Height: {person.height}</li>
      <li>Mass: {person.mass}</li>
      <li>Species: {person.species}</li>
      <li>Homeworld: {person.homeworld}</li>
      <h4>Films:</h4>
      {person.films.map(film => { return <li key={film}>{film}</li> })}
    </div>
  )
}

export default Person
