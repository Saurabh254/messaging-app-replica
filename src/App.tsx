import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainView from "./components/MainView";
import { useState } from "react";


const App = () => {
    const [messageUserView, setMessageUserView] = useState(2);
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <>
            <Header status={true} />
            <div className="main">
                <Sidebar />
                <MainView messageUserView={messageUserView} />
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)