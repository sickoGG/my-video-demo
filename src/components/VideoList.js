import React from 'react';
import {Link} from "react-router-dom";

function VideoList() {
    return (
        <div className="VideoList">
        <header className="VideoList-header">
            <h1>Video List</h1>
            <Link to="/video/1">Video 1</Link>
        </header>
        </div>
    );
}

export default VideoList;