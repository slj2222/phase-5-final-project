import './App.css';
import MainContainer from './components/MainContainer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import StartPage from './components/StartPage';

function App() {
  return (
    <div className="App">

      <Header />
      <Navbar />
      <MainContainer />
    </div>
  );
}

export default App;
