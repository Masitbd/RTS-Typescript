import ReactDOM from "react-dom";
import GuestList from "./State/GuestList";


const App = () => {
    return <div>
        <GuestList />
    </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)