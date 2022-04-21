import React from 'react'
import './App.css';
import Main from "./Main";
import UserContext from "./UserContext";
import Navbar from './Navbar'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <UserContext.Provider value={'rayna'}>
                    <Navbar />
                    <Main />
                </UserContext.Provider>
            </div>
        );
    }

}

export default App;
