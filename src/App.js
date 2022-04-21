import logo from './logo.svg';
import './App.css';
import Main from "./Main";
import UserContext from "./UserContext";
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'rayna'}>
        <Navbar />
        <Main />
      </UserContext.Provider>
    </div>
  );
}

export default App;
