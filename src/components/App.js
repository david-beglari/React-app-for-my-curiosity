import React from 'react';
import './App.css';
import Header from "../shared/components/layout/Header";
import Footer from "../shared/components/layout/Footer";
import Content from "../shared/components/layout/Content";
import ToDo from "./ToDo/ToDo";

function App() {
    return (
        <div className="App">
            <Header title="Welcome to To do task list"/>
            <Content>
                <ToDo />
            </Content>
            <Footer/>
        </div>
    );
}

export default App;
