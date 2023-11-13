import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../Redux/actions';
import UserCards from '../components/UserCards';
import UserNav from '../components/UserNav';
import Pagination from '../components/Pagination';
import style from './styles/Home.module.css';

const UserHome = () => {
    const dispatch = useDispatch();
  const { character, currentPage, totalPages } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div className={style.Home}>
      <UserNav/>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
      <UserCards character={character} currentPage={currentPage} />
    </div>
  )
}

export default UserHome