import style from "./styles/NavBar.module.css";
//import {Link} from 'react-router-dom';
import LoginButton from "./Auth0/LoginButton";

export default function NavBar() {
  
    
  
  return (

  <div className={style.nav}>
    <h2 className={style.homeTitle}>Rick and Morty</h2>
    <LoginButton/>
  </div>
  
  );
}