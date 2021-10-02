import { PersonType } from "../types"

export async function fetchJson<Response = any>(url: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(
    `https://swapi.dev/api/${url}/`,
    {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })

  return response.json()
}

export async function getPersonInfo(person: PersonType) {

  if (!person.species.length) {
    person.species = "Human";
  } else {
    const species = await fetchJson<{ name: string }>(
      person.species[0].substring("https://swapi.dev/api/".length)
    );
    person.species = species.name;
  }

  const homeworld = await fetchJson<{ name: string }>(
    person.homeworld.substring("https://swapi.dev/api/".length)
  );
  person.homeworld = homeworld.name;

  for (let i = 0; i < person.films.length; i++) {
    const film = await fetchJson<{ title: string }>(
      person.films[i].substring("https://swapi.dev/api/".length)
    );
    person.films[i] = film.title;
  }

  return person;
}

export async function getPeopleByPage(page: number) {
  const response = await fetchJson<{ data: PersonType[]; nextPage: string}>(
    `people/?page=${page}`
  )
  return { people: response.data, nextPage: response.nextPage }
}

export async function searchChars(query: string) {
  const response = await fetch(`https://swapi.dev/api/people/?search=${query}`)
  return response.json()
}
