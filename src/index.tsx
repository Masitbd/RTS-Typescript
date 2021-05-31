import React from "react";
import ReactDOM from "react-dom";
import EventComponent from "./events/Event<<component";
import UserSearch from "./State/UserSearch";


const App = () => {
    return <div>
        <EventComponent />

    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)