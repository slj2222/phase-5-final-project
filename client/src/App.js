import './App.css';
import React, { useState, useEffect } from 'react';
import MainContainer from './components/MainContainer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import StartPage from './components/StartPage';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  const [currentCompany, setCurrentCompany] = useState('')


  useEffect(()=>{
    fetch('/auth')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setCurrentCompany(data)
    })
}, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <StartPage setCurrentCompany={setCurrentCompany}/>
        </Route>
        <Route exact path ="/signup">
          <SignUp setCurrentCompany={setCurrentCompany} />
        </Route>
        <Route exact path = "/login">
          <Login setCurrentCompany={setCurrentCompany} />
        </Route>
        <Route exactPath="logged-in">
          <Header />
          <Navbar />
          <MainContainer currentCompany={currentCompany} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
