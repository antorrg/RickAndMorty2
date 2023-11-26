import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../Redux/actions";
import { UserCards, Pagination, UserNav } from "../components/Index";
import style from "./styles/Home.module.css";

const UserHome = () => {
  const dispatch = useDispatch();
  const { character, myFavorites, currentPage, totalPages } = useSelector(
    (state) => state
  );
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const currentData = showFavorites ? myFavorites : character;

  return (
    <div className={style.Home}>
      <UserNav
        setShowFavorites={setShowFavorites}
        showFavorites={showFavorites}
      />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
      <UserCards character={currentData} currentPage={currentPage} />
    </div>
  );
};

export default UserHome;
