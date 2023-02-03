import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import axios from "axios";
import Games from "./Games";
import './App.css';

function Home() {
    return <h2>Home</h2>;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/games" element={<Games/>} />
            </Routes>
        </Router>
    );
}

export default App;
