// import React, { useState, useRef } from 'react';


// function Camera() {
//     const [playing, setPlaying] = useState(false);

//     const vest = useRef(null);
//     const videoRef = useRef(null);



//     const HEIGHT = 650;
//     const WIDTH = 490;

//     const startVideo = () => {
//         setPlaying(true);
//         navigator.getUserMedia(
//             {
//                 video: true,
//             },
//             (stream) => {
//                 let video = document.getElementsByClassName('app__videoFeed')[0];
//                 if (video) {
//                     video.srcObject = stream;
//                 }
//             },
//             (err) => console.error(err)
//         );
//     };

//     const stopVideo = () => {
//         setPlaying(false);
//         let video = document.getElementsByClassName('app__videoFeed')[0];
//         video.srcObject.getTracks()[0].stop();
//     };

//     const snap = () => {
//         if (playing === false) {
//             console.log("no camera found")
//         }
//         else {
//             console.log("camera found", vest)
//             var context = vest.current.getContext('2d')
//             context.drawImage(videoRef.current, 0, 0, HEIGHT, WIDTH);

//         }
//         console.log('snap')
//     }

//     window.onload = () => {
//         const canvas = document.getElementById('canvas');

//         const saveButton = document.getElementById('save');
//         saveButton.addEventListener('click', () => save(canvas));
//     };

//     // save function
//     function save(canvas) {
//         const data = canvas.toDataURL('image/png');
//         const anchor = document.createElement('a');
//         anchor.href = data;
//         anchor.download = 'image.png';
//         anchor.click();
//     }



// }

// export { Camera };