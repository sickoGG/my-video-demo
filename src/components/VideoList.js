import React from 'react';
import videoData from "../videodata.json";
import {Link} from "react-router-dom";
function VideoList() {
    return (
        <div className="VideoList">
        <header className="VideoList-header">
            <h1>Video List</h1>
        </header>
            <div className="VideoList-intro">
                <div className="container">
                    <div className="row">
                        {videoData.map((video) => (
                        <div className="videoList-body col-md-4 mb-2" key={video.id}>
                            <Link to={`/video/${video.id}`}>
                                <img src={"../../favicon.ico"} alt={video.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{video.title}</h5>
                                </div>
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