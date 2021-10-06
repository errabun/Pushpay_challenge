export interface PersonType {
  name: string
  height: string
  mass: string
  birth_year: string
  homeworld: string
  films: string[]
  species: string
}

export interface PersonProps {
  person: PersonType
}

export type OnSubmit = {onSubmit: (query: string, e: {preventDefault:() => void}) => void}
