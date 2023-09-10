import React from 'react';
import videoData from "../videodata.json";
import {Link} from "react-router-dom";

function VideoList() {
    const onMouseOverVideo = (event) => {
        event.target.play();
    }
    const onMouseOutVideo = (event) => {
        event.target.pause();
    }
    return (
        <div className="VideoList">
            <header className="VideoList-header">
                <h1>Video List Page</h1>
            </header>
            <div className="VideoList-intro">
                <div className="container">
                    <div className="row">
                        {videoData.map((video) => (
                            <div className="videoList-body col-md-4 mb-2" key={video.id}>
                                <Link to={`/video/${video.id}`}>
                                    <video className="video" muted loop
                                           onMouseOver={onMouseOverVideo}
                                           onMouseOut={onMouseOutVideo}
                                    >
                                        <source src={`/videos/${video.videoUrl}`} type="video/mp4"/>
                                        Your browser does not support the video tag.
                                    </video>
                                    <h2>{video.title}</h2>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoList;