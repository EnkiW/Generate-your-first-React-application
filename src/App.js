import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <Sidebar />
                <MainContainer />
            </div>
        </div>
    );
}

export default App;
