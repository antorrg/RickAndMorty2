import style from "./styles/NavBar.module.css";
import LoginButton from "./Auth0/LoginButton";
import { Search } from "./Index";
export default function NavBar() {
  return (
    <div className={style.nav}>
      <h2 className={style.homeTitle}>Rick and Morty</h2>
      <LoginButton />
      <Search />
    </div>
  );
}
