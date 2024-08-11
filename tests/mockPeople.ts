import { PeopleResponse, Person } from '@/models/types';

export const mockPeople: Person[] = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
    starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  },
  {
    name: 'Han Solo',
    height: '180',
    mass: '80',
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'brown',
    birth_year: '29BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/22/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
    ],
    species: [],
    vehicles: [],
    starships: ['https://swapi.dev/api/starships/10/', 'https://swapi.dev/api/starships/22/'],
    created: '2014-12-10T16:49:14.582000Z',
    edited: '2014-12-20T21:17:50.334000Z',
    url: 'https://swapi.dev/api/people/14/',
  },
  {
    name: 'Wedge Antilles',
    height: '170',
    mass: '77',
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'hazel',
    birth_year: '21BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/22/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
    ],
    species: [],
    vehicles: ['https://swapi.dev/api/vehicles/14/'],
    starships: ['https://swapi.dev/api/starships/12/'],
    created: '2014-12-12T11:08:06.469000Z',
    edited: '2014-12-20T21:17:50.341000Z',
    url: 'https://swapi.dev/api/people/18/',
  },
];

export const mockResponse: PeopleResponse = {
  count: 61,
  next: 'https://swapi.dev/api/people/?page=2',
  previous: null,
  results: mockPeople,
};
export const mockOnePageResponse: PeopleResponse = {
  count: 61,
  next: null,
  previous: null,
  results: mockPeople,
};

export const mockAllPagesResponse: PeopleResponse = {
  count: 61,
  next: 'https://swapi.dev/api/people/?page=3',
  previous: 'https://swapi.dev/api/people/?page=1',
  results: mockPeople,
};

export const mockPerson = mockPeople[0];
