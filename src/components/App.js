import React from 'react';
import Home from './Home/Home'
import './App.css';
import Header from "../shared/components/layout/Header";
import Footer from "../shared/components/layout/Footer";
import Content from "../shared/components/layout/Content";

function App() {
    return (
        <div className="App">
            <Header title="Welcome to Fuck"/>
            <Content>
                <Home/>
            </Content>
            <Footer/>
        </div>
    );
}

export default App;
