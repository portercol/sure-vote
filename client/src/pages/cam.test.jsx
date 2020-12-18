
import React, { useState, useRef } from 'react';


function Camera() {
    const [playing, setPlaying] = useState(false);

    const vest = useRef(null);
    const videoRef = useRef(null);


    const HEIGHT = 650;
    const WIDTH = 490;

    const startVideo = () => {
        setPlaying(true);
        navigator.getUserMedia(
            {
                video: true,
            },
            (stream) => {
                let video = document.getElementsByClassName('app__videoFeed')[0];
                if (video) {
                    video.srcObject = stream;
                }
            },
            (err) => console.error(err)
        );
    };

    const stopVideo = () => {
        setPlaying(false);
        let video = document.getElementsByClassName('app__videoFeed')[0];
        video.srcObject.getTracks()[0].stop();
    };

    const snap = () => {
        if (playing === false) {
            console.log("no camera found")
        }
        else {
            console.log("camera found", vest)
            var context = vest.current.getContext('2d')
            context.drawImage(videoRef.current, 0, 0, HEIGHT, WIDTH);

        }
        console.log('snap')
    }

    return (
        <div className="app">
            <div className="app__container">
                <video ref={videoRef}
                    height={HEIGHT}
                    width={WIDTH}
                    muted
                    autoPlay
                    className="app__videoFeed"
                ></video>
            </div>

            <canvas ref={vest} id="canvas" width={WIDTH} height={HEIGHT}></canvas>

            <div className="app__input">
                {playing ? (
                    <button onClick={stopVideo}>Stop</button>
                ) : (
                        <button onClick={startVideo}>Start</button>
                    )}
                <button className="btn btn-success" id="capture" onClick={snap}>CAPTURE</button>

            </div>
        </div>
    );
}

export default Camera;