import React from 'react'
import UserContext from "./UserContext";

class LoginInfo extends React.Component {
    render() {
        return (
            <UserContext.Consumer>
                {(value) => <span>Logged in as {value}</span>}
            </UserContext.Consumer>
        )
    }


}

export default LoginInfo