import UserContext from "./UserContext";

const Greeting = () => {
    return (
        <UserContext.Consumer>
            {(value) => <h1>Hello {value}</h1>}
        </UserContext.Consumer>
    )
}

export default Greeting