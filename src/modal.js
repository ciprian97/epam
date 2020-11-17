import axios from "axios";
import React, { useState } from "react";
import { Button, Header, List, Loader, Modal } from "semantic-ui-react";
import styled from "styled-components";

let characters = [];

const ModalComponent = (props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const ButtonStyled = styled(Button)`
    &&& {
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
      :hover {
        background-color: transparent;
      }
    }
  `;

  const initialArray = () => {
    characters = [];
    setOpen(false);
  };

  const getActors = (e) => {
    setLoading(true);
    const filteredData = props.films.filter(
      (item) => item.title === e.target.id
    );
    const promiseApi = filteredData[0].characters.map((api) => {
      return axios.get(api);
    });
    return Promise.all(promiseApi).then((response) => {
      response.map((actor) => {
        characters.push(actor.data.name);
      });
      setLoading(false);
      setOpen(true);
    });
  };

  if (loading)
    return (
      <Loader
        style={{ marginTop: "43%" }}
        indeterminate
        size="massive"
        active
        inline="centered"
      />
    );

  return (
    <Modal
      onClose={() => initialArray()}
      open={open}
      trigger={
        <ButtonStyled
          data-testid="modal-button"
          id={props.text}
          onClick={(e) => getActors(e)}
        >
          {props.text}
        </ButtonStyled>
      }
    >
      <Modal.Header>Title: {props.text}</Modal.Header>
      <Modal.Header>Director: {props.director}</Modal.Header>
      <Modal.Header>Release: {props.releaseDate}</Modal.Header>
      <Modal.Header>
        <Header as="h2" style={{ marginBottom: 20 }}>
          Characters:{" "}
        </Header>
        <List>
          {characters.map((actor, index) => (
            <List.Item style={{ fontSize: "16px" }} key={index}>
              {actor}
            </List.Item>
          ))}
        </List>
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>{props.openingCrawl}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={initialArray}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalComponent;
