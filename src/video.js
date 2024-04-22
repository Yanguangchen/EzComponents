import React from "react";

function VideoComponent() {

    return(
        <video width="320" height="240" controls>
        <source src="https://www.youtube.com/watch?v=pEfrdAtAmqk" type="video/mp4" />
        </video>
    );
}

export default VideoComponent;