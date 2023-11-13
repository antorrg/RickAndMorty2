import {Home, UserHome}  from './index';
import { useAuth0 } from '@auth0/auth0-react'

const Landing = () => {
    const {isAuthenticated} = useAuth0();


  return (
    <div>
    {isAuthenticated ?
    <UserHome/> : <Home/>} 
    </div>
  )
}

export default Landing