import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import { LoginContext } from './Context/LoginContext';
import React,{useState} from 'react';

function App() {

  const [username,setUsername] = useState("");
  const [showProfile,setShowProfile] = useState(false);

  return (
    <div className="App">
        <LoginContext.Provider value={{username,setUsername,setShowProfile}}>
            {showProfile ? <Profile /> : <Login />}
        </LoginContext.Provider>
    </div>
  );
}

export default App;
