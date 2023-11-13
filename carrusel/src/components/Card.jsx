import {Link} from 'react-router-dom'
import style from './styles/Card.module.css';

const Card = ({character}) => {
  console.log(character)
  const {id, name, origin, image}= character;
  return (
    <div key= {id} className={style.cardContainer}>
      <Link to={`/detail/${id}`}>
      <h2>{name}</h2></Link>
   <img src={image} alt='Not found'/>
   <p>Origin: {origin}</p>
    </div>
  )
}

export default Card