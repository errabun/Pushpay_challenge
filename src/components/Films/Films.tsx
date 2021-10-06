import { PersonProps } from "../../types";
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import { useState, useEffect } from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPersonFilms } from "../../api";

function CustomToggle( {person}: PersonProps ) {

  const handleClick = useAccordionButton('0', () =>
    person.films.map(filmUrl => {
      getPersonFilms(filmUrl).then(data => console.log(data))
    })
  )

  return (
    <button onClick={handleClick}>Film Appearances</button>
  )
}

export const Films = ({ person }: PersonProps) => {

  const [films, setFilms] = useState([])

  // useEffect(() => {
  //   person.films.map(filmUrl => {
  //     getPersonFilms(filmUrl).then(data => setFilms(data.title))
  //   })
  // }, [])

  

  console.log(films)

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <CustomToggle person={person}></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey ='0'>
          <Card.Body>this is the body!</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

//{films.map(film => <li key={film}>{film}</li>)}

//<Accordion.Item eventKey='0'>
{/* <Accordion.Header>Film Appearances</Accordion.Header>
<Accordion.Body></Accordion.Body>
</Accordion.Item> */}