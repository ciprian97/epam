import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ModalComp from './modal';

import { Modal } from 'react-bootstrap';
let ceva = []
const Index = () => {
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchResults = () => {
    return films.filter((film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getActors = () => {
    ceva = [];
    const filteredData = films.filter((item) => item.title === e.target.id);
    return filteredData[0].characters.map((api) => {
      return axios.get(api).then((response) => {
        console.log('responseeeee', response)
        ceva.push(response.data.name)
        setCharacters(ceva)
      });
    });
  };

  console.log('characters', characters);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/').then((response) => {
      setFilms(response.data.results);
    });
  }, []);
  
  const StyledTitle = styled.button`
    background-color: transparent;
    border: none;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    :focus {
      border: none;
      outline: none;
    }
  `;

  const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: column;
  `;

  return (
    <>
      <input
        defaultValue={searchTerm}
        placeholder="Search for a movie..."
        onChange={handleSearchChange}
        defaultValue={searchTerm}
      />
      {searchResults().length === 0 ? (
        <p>No results</p>
      ) : (
        <ListWrapper>
          {searchResults().map((film, index) => {
            return (
              <StyledTitle
               
                id={film.title}
                key={index}
              >
                {film.title}
              </StyledTitle>
            );
          })}
        </ListWrapper>
      )}
      <ModalComp body={characters} title="ceva" />
    </>
  );
};

export default Index;
