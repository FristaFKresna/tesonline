import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/login';
import { useEffect, useState } from 'react';
import MainPage from './pages/main';
import { Route } from 'react-router-dom';


const App = () => {
  const [token, setToken] = useState(null)

  useEffect(()=>{cekLogin()},[])

  const cekLogin = () => {
    setToken(localStorage.getItem('token'));
    console.log(token)
  }

  return (
    <div>
      {token==null?<Login token={token}/> : <MainPage/>}
    </div>
  );
}

export default App;
