import style from "./styles/NavBar.module.css";
import LogoutButton from "./Auth0/LogoutButton";
import { useAuth0 } from '@auth0/auth0-react'
const UserNav = () => {
    const {user}=useAuth0();
    console.log(user)

  return (
    <div className={style.nav}>
      <LogoutButton/>
      <h4>Bienvenido: {user.nickname}</h4>
      <img src = {user.picture}/>
    </div>
  )
}

export default UserNav