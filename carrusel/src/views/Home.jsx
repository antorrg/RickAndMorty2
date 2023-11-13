// Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../Redux/actions';
import Cards from '../components/Cards';
import NavBar from '../components/NavBar';

import style from './styles/Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);
  console.log(character)

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div className={style.Home}>
      <NavBar/>
      <Cards character={character} />
    </div>
  );
};

export default Home;
