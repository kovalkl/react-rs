import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useFetching from './../../hooks/useFetching';
import peopleService from './../../services/PeopleService';
import { Person } from './../../shared/types';
import { ThemeContext } from './../../store/ThemeContext';
import Button from './../UI/button/Button';
import './details.sass';

const Details = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { details } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState<Person>(Object);
  const [fetchPersonById, isLoadingPersonById] = useFetching(async () => {
    const person: Person = await peopleService.getPersonById(parseInt(details!));
    setPerson(person);
  });

  useEffect(() => {
    fetchPersonById();
    return () => setPerson(Object);
  }, []);

  return (
    <div className={`details ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="details__background" onClick={() => navigate(-1)}></div>
      <div className={`details__content  ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
        {isLoadingPersonById || !Object.keys(person).length ? (
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
            <Button className="details__btn" type="button" onClick={() => navigate(-1)}>
              Close
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
