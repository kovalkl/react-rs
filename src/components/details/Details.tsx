import { useEffect, useState } from 'react';

import useFetching from '../../hooks/useFetching';
import peopleService from '../../services/PeopleService';
import { Person } from '../../shared/types';
import Button from '../UI/button/Button';
import './details.sass';

interface IDetailsProps {
  personId: string;
  setCurrentPersonId: (id: string) => void;
}

const Details = ({ personId, setCurrentPersonId }: IDetailsProps) => {
  const [person, setPerson] = useState<Person>(Object);

  const [fetchPersonById, isLoadingPersonById] = useFetching(async () => {
    const person: Person = await peopleService.getPersonById(personId);
    setPerson(person);
  });

  useEffect(() => {
    fetchPersonById();
    return () => setPerson(Object);
  }, []);

  return (
    <div className="details">
      <div className="details__background" onClick={() => setCurrentPersonId('0')}></div>
      <div className="details__content">
        {isLoadingPersonById ? (
          <div className="accent-text center-text">Loading...</div>
        ) : (
          <>
            <p className="details__title">{person.name}</p>
            <p>
              {person.name} was born in {person.birth_year}. The gender is {person.gender}. It was
              born in {person.birth_year}. It has {person.eye_color} eye color, {person.hair_color}{' '}
              hair and {person.skin_color} skin. Height is {person.height}cm and weight is{' '}
              {person.mass}
              kg.
            </p>
            <Button className="details__btn" type="button" onClick={() => setCurrentPersonId('0')}>
              Close
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
