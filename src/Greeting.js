import React from 'react'
import UserContext from "./UserContext";

class Greeting extends React.Component {
    render() {
        return (
            <UserContext.Consumer>
                {(value) => <h1>Hello {value}</h1>}
            </UserContext.Consumer>
        )
    }
}

export default Greeting