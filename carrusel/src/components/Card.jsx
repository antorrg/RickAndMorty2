import { Link } from 'react-router-dom';
import style from './styles/Card.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFav, removeFav } from '../Redux/actions';

const Card = ({ character }) => {
  const { id, name, origin, image, gender, species } = character;
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id)); // Utiliza dispatch para llamar a la acción
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, origin, image, gender, species })); // Utiliza dispatch para llamar a la acción
    }
  };

  return (
    <div key={id} className={style.cardContainer}>
      {isAuthenticated && (
        <button className={style.btn1} onClick={handleFavorite}>
          {isFav ? '❤️' : '🤍'}
        </button>
      )}

      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img src={image} alt='Not found' />
      <p>Origin: {origin}</p>
    </div>
  );
};

export default Card;