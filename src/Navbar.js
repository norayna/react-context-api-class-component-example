import React from 'react'
import Menu from "./Menu";
import LoginInfo from './LoginInfo'

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <Menu />
                <LoginInfo />
            </nav>
        )
    }

}

export default Navbar