import React from 'react';
import {useParams} from "react-router-dom";

function VideoPlayer() {
    const { id } = useParams();
    return (
        <div className="VideoPlayer">
        <header className="VideoPlayer-header">
         <h1>Video Player</h1>
        </header>
        <p>Video ID: {id}</p>
        </div>
    );
}
export default VideoPlayer;