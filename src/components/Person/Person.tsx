import { PersonType } from '../../types';
import { useEffect, useState } from 'react';
import { getPersonInfo } from '../../api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Person.css'
import { Accordion, Card } from 'react-bootstrap';

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
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Film Appearances</Accordion.Header>
          <Accordion.Body>{person.films.map(film => <li>{film}</li>)}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Person
