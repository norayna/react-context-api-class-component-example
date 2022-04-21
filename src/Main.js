import React from 'react'
import Greeting from "./Greeting";
import MainText from "./MainText";

class Main extends React.Component {
    render() {
        return (
            <main>
                <Greeting />
                <MainText />
            </main>
        )
    }
}

export default Main