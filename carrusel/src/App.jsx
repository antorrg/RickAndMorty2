import {Landing, Detail }from './views/index';
import {Routes, Route} from 'react-router-dom';
//import Favorites from './components/Favorites/Favorites'
import './App.css';
import axios from 'axios';
//axios.defaults.baseURL= 'https://jsonplaceholder.typicode.com';
axios.defaults.baseURL= 'http://localhost:3001';


function App() {
 

  return (
    <div>
    <Routes>
      <Route path={'/'} element= {<Landing/>}/>
      <Route path={'/detail/:id'} element ={<Detail/>}/>
      
    </Routes>
    
    </div>
  )
}

export default App
