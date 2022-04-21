import UserContext from "./UserContext";

const LoginInfo = () => {
    return (
        <UserContext.Consumer>
            {(value) => <span>Logged in as {value}</span>}
        </UserContext.Consumer>
    )
}

export default LoginInfo