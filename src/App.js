import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';
import Details from './components/Details';




  export default function App() {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [error, setError] = useState(null);

  const openDetails = (id) => {
    const character = characters.filter(item => item.id === id);
    setCurrentCharacter(character);
  };

  const closeDetails = () => {
    setCurrentCharacter(null);
  };

  useEffect(() => {
    console.log("Fetching");
    axios.get("https://swapi.dev/api/people")
    .then(response => {
      const characters = response.data;

      let id = 1;
      characters.forEach(item => item.id = id++);

      setCharacters(characters);
    })

    .catch(err => {
      console.error(err);
      setError(err);
      });
  }, []);

  const HeaderContainer = styled.header`
  background-color: transparent;
  color: #f54248;
  text-shadow: 1px 1px 5px #fff;
  text-align: center;
  font-size: 50px;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 50%;
`;


return (
  <div className="App">
    <HeaderContainer>Star Wars Character List</HeaderContainer>
    {error && <h2>{error}</h2>}
    <Row>
      <Column>
        {
          characters && characters.map(item => {
            return <Character
              key={item.id}
              info={item}
              openDetails={openDetails}
              closeDetails={closeDetails}
              currentCharacter={currentCharacter}
            />;
          })
        }
      </Column>
      <Column>
        {
          currentCharacter && <Details info={currentCharacter} closeDetails={closeDetails} />
        }
      </Column>
    </Row>
  </div>
);
}


