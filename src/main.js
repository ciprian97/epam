import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Input } from "semantic-ui-react";
import styled from "styled-components";

import ModalComponent from "./modal";

const Main = () => {
  const [films, setFilms] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const handleSearchChange = (e) => {
    setSearchKey(e.target.value);
  };

  const search = () => {
    return films.filter((film) =>
      film.title.toLowerCase().includes(searchKey.toLowerCase())
    );
  };
  useEffect(() => {
    axios.get("https://swapi.dev/api/films/").then((response) => {
      setFilms(response.data.results);
    });
  }, []);

  const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: column;
  `;

  return (
    <Container style={{ marginTop: 200, width: "30%" }}>
      <Input
        style={{ width: "400px" }}
        placeholder="Search for a movie..."
        onChange={handleSearchChange}
        defaultValue={searchKey}
      />
      {search().length === 0 ? (
        <p>No results</p>
      ) : (
        <ListWrapper>
          {search().map((film, index) => {
            return (
              <ModalComponent
                key={index}
                text={film.title}
                openingCrawl={film.opening_crawl}
                director={film.director}
                releaseDate={film.release_date}
                films={films}
              />
            );
          })}
        </ListWrapper>
      )}
    </Container>
  );
};

export default Main;
