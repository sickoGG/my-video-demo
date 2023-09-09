import React from 'react';
import './App.css';
import VideoList from './components/VideoList';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<VideoList />} />
                    <Route path="/video/:id" element={<VideoPlayer />} />
                </Routes>
            </Router>
        </div>

    );
}

export default App;
