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
  const [currentCompany, setCurrentCompany] = useState(null)
  console.log(currentCompany)



  // useEffect(()=>{
  //   fetch('/auth')
  //   .then(res => res.json())
  //   .then(data => {
  //       console.log(data)
  //       setCurrentCompany(data)
  //   })
  // }, [])

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((company) => setCurrentCompany(company));
      }
    });
  }, []);

  function onLogout() {
    setCurrentCompany(null)
  }

  return (
    <div className="App">
      <Switch>
        {currentCompany ?
          (
            <>
              <Route exactPath="/">
                <Header />
                <Navbar onLogout={onLogout} />
                <MainContainer currentCompany={currentCompany} />
              </Route>
            </>
          ) : (
            <>
              <Route exact path="/">
                <StartPage setCurrentCompany={setCurrentCompany} currentCompany={currentCompany} />
              </Route>
              < Route exact path="/signup">
                <SignUp setCurrentCompany={setCurrentCompany} />
              </Route>
              <Route exact path="/login">
                <Login
                  setCurrentCompany={setCurrentCompany}
                  currentCompany={currentCompany}
                />
              </Route>
            </>
          )
        }


      </Switch>
    </div>
  );
}

export default App;
