import React, { useState, useContext, useReducer, useMemo, useRef, useCallback } from 'react';
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';
import Search from './Search'
import useCharacters from '../Hooks/useCharacters';


const Container = styled.div`
  background-color: ${props => props.darkMode ? props.colorDark : 'white'};
  color: ${props => props.darkMode ? 'white' : props.colorDark};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  margin: 10px;
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
const Button = styled.button`
  color: ${props => props.darkMode ? 'white' : props.colorDark};
  background-color: transparent;
  padding: 4px;
  border-radius: 8px;
  margin-bottom: 4px;
  font-weight: bold;
`

const Favorite = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
const CardFavorite = styled.section`
  display: flex;
  justify-content: space-around;
`

const initialState = {
  favorites: []
}

const API = 'https://rickandmortyapi.com/api/character/'

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      const isExist = state.favorites.find(x => x.id === action.payload.id);
      if (isExist) return { ...state }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(x => x.id !== action.payload.id)
      }
    default:
      return state;
  }
}

const Characters = ({ darkMode }) => {
  const colorDark = useContext(ThemeContext);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  }

  const handleClickRemove = (favorite) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: favorite })
  }

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value)
  // }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])

  // const filterUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase())
  // })

  const filterUsers = useMemo(() =>
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  )

  return (
    <React.Fragment>
      <Search searchInput={searchInput} search={search} handleSearch={handleSearch} />
      {favorites.favorites.length ? <h2 style={darkMode ? { color: 'white' } : { color: colorDark }}>Favoritos</h2> : null}
      <CardFavorite>
        {favorites.favorites.map(favorite => (
          <div>
            <Favorite src={favorite.image} />
            <span
              style={{ cursor: 'pointer', color: 'red' }}
              onClick={() => handleClickRemove(favorite)}>
              x
            </span>
          </div>
        ))}
      </CardFavorite>
      <Container darkMode={darkMode} colorDark={colorDark}>
        {
          filterUsers.map(character => (
            <Card key={character.id}>
              <img src={character.image} alt={character.name} />
              <div>
                <h2>{character.name}</h2>
                <h4>{character.status}</h4>
                <h4>{character.species}</h4>
                <h4>{character.gender}</h4>
                <Button
                  type="button"
                  darkMode={darkMode} colorDark={colorDark}
                  onClick={() => handleClick(character)}>
                  Añadir a Favoritos
                </Button>
              </div>
            </Card>
          ))
        }
      </Container>
    </React.Fragment>
  )
}

export default Characters;
