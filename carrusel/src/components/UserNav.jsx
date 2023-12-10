import style from "./styles/NavBar.module.css";
import LogoutButton from "./Auth0/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { Filter, Order } from "./Favorites/index";
import { Search } from "./Index";


const UserNav = ({ setShowFavorites, showFavorites }) => {
 
  const { user } = useAuth0();
  console.log(user);
  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };
  const handleTogglePost = ()=>{
    
  }
  
  return (
    <div className={style.nav}>
      <div className="">
        <LogoutButton />
      </div>
      <div className={style.userDetails}>
        <h4>Bienvenido: {user.given_name ? user.given_name : user.nickname}</h4>
        <img src={user.picture} alt="User Avatar" />
      </div>
      <div>
        <Search />
      </div>
      {showFavorites && (
        <div className={style.favoritesSection}>
          <h3>Favoritos</h3>
          <div className={style.filterOrderButtons}>
            <div>
              <Filter />
            </div>
            <div>
              <Order />
            </div>
          </div>
        </div>
      )}
      <button onClick={handleToggleFavorites}>
        {showFavorites ? "Ir a Home" : "Ir a Favoritos"}
      </button>
      <div></div>
    </div>
  );
};

export default UserNav;
