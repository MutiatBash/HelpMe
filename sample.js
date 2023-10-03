// document.body.style.backgroundColor = "orange";

// var recorder = null;
// let chunks = [];

// function onAccessApproved(stream) {
//   recorder = new MediaRecorder(stream);

//   recorder.addEventListener("dataavailable", (event) => {
//     chunks.push(event.data);
//     console.log(event.data);
//   });

//   //   recorder.start();

//   recorder.onstop = function () {
//     stream.getTracks().forEach(function (track) {
//       if (track.readyState === "live") {
//         track.stop();
//       }
//     });
//   };

//   recorder.ondataavailable = function (event) {
//     const videoBlob = new Blob(chunks, { type: "video/webm" });
//     console.log(videoBlob);
//     const formData = new FormData();
//     formData.append("video", videoBlob, "screen-recording.webm");
//   };

//   recorder.start();

//   //   fetch("", {
//   //     method: "POST",
//   //     body: formData,
//   //   })
//   //     .then((response) => {
//   //       if (response.ok) {
//   //         console.response;
//   //       } else {
//   //         console.error;
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error;
//   //     });

//   //   recorder.ondataavailable = function (event) {
//   //     let recorderBlob = event.data;
//   //     let url = URL.createObjectURL(recorderBlob);

//   //     let a = document.createElement("a");

//   //     a.style.display = "none";
//   //     a.href = url;
//   //     a.download = "screen-recording.webm";

//   //     document.body.appendChild(a);

//   //     a.click();

//   //     document.body.removeChild(a);

//   //     URL.revokeObjectUrl(url);
//   //   };
// }

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "request_recording") {
//     console.log("request recording");
//     // console.log(videoBlob)

//     sendResponse(`processed : ${message.action}`);

//     navigator.mediaDevices
//       .getDisplayMedia({
//         audio: true,
//         video: { width: 9999999999, height: 9999999999 },
//       })
//       .then((stream) => {
//         onAccessApproved(stream);
//       });

//     // console.log(video);
//   }

//   if (message.action === "stop_recording") {
//     console.log("stopping");
//     sendResponse(`processed : ${message.action}`);

//     if (!recorder) return console.log("no recorder");

//     recorder.stop();
//   }
// });
