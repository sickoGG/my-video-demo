import React from 'react';
import {Link, useParams} from "react-router-dom";
import videoData from "../videodata.json";
function VideoPlayer() {
    const { id } = useParams();
    const video = videoData.find((v) => v.id === parseInt(id));
    return (

    <div className="video-player">
        <h2>{video.title}</h2>
        <video width="640" height="360" controls>
            <source src={`/videos/${video.videoUrl}`} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <Link to="/">Back to Video List</Link>
    </div>
    );
}
export default VideoPlayer;