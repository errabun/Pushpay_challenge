import { PersonProps } from "../../types";
import { Accordion } from 'react-bootstrap';
import { useState } from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPersonFilms } from "../../api";

type PersonFilms = [...string[]]

export function Films({ person }: PersonProps) {

  const [films, setFilms] = useState<PersonFilms>([])

  const handleClick = async (e: {preventDefault:() => void}) => {
    e.preventDefault()

    const charFilms: string[] = []
    
    await Promise.all(person.films.map(async filmUrl => {
      await getPersonFilms(filmUrl)
        .then(film => charFilms.push(film.title))
    }))
    setFilms(charFilms)
  }

  const listFilms = films.map(film => <li key={film}>{film}</li>)

  return (
    <Accordion>
      <Accordion.Item eventKey='0'>
        <Accordion.Header onClick={(e) => handleClick(e)}>
          Film Appearances
        </Accordion.Header>
        <Accordion.Body>{listFilms}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

//{films.map(film => <li key={film}>{film}</li>)}

//<Accordion.Item eventKey='0'>
{/* <Accordion.Header>Film Appearances</Accordion.Header>
<Accordion.Body></Accordion.Body>
</Accordion.Item> */}