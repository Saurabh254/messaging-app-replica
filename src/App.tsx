import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import MainView from './components/MainView/MainView';
import React from 'react';


const App = () => {
    return (
        <React.Fragment>
            <Header />
            <MainView />
        </React.Fragment>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(<App />)


