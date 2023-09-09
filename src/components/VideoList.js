import React from 'react';
import videoData from "../videodata.json";
import {Link} from "react-router-dom";
function VideoList() {
    return (
        <div className="VideoList">
        <header className="VideoList-header">
            <h1>Video List</h1>
        </header>
            <ul>
                {videoData.map((video) => (
                    <li key={video.id}>
                        <Link to={`/video/${video.id}`}>
                            <img src={"../../favicon.ico"} alt={video.title} />
                            <p>{video.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VideoList;