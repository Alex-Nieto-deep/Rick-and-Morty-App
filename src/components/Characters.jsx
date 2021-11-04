import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.darkMode ? 'black' : 'white'};
  color: ${props => props.darkMode ? 'white' : 'black'};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;

`
const Card = styled.div`
  height: 100%;
  box-shadow: 2px 6px 8px rgba(0,0,0,0.19);
  border-radius: 8px;

  img {
    width: 100%;
    border-radius: 8px;
  }

  h2,h4 {
    margin: 0;
    margin-bottom: 4px;
  }
`

const Characters = ({darkMode}) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, []);

  return (
    <Container darkMode={darkMode}>
    {
    characters.map(character => (
      <Card >
        <img src={character.image} alt={character.name} />
        <div>
          <h2>{character.name}</h2>
          <h4>{character.status}</h4>
          <h4>{character.species}</h4>
          <h4>{character.gender}</h4>
        </div>
      </Card>
    ))
    }
    </Container>
  )
}

export default Characters;
