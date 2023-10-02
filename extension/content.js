// TO INJECT THE CONTROL BUTTONS
function addControls() {
  const pauseButton = document.createElement("button");
  const text = document.createTextNode("pause");
  pauseButton.appendChild(text);
  pauseButton.style.backgroundColor = "blue";
  pauseButton.id = "pauseBtn";
  console.log(pauseButton.id);
  console.log(pauseButton);
  // pauseButton.addEventListener("click", pause);
  document.body.appendChild(pauseButton);

  // const pauseBtnCont = document.querySelector("#pause_btn");
  // pauseBtnCont.appendChild(pauseButton)
}

var recorder = null;
var chunks = [];

function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  //   recorder.addEventListener("dataavailable", (event) => {
  //     chunks.push(event.data);
  //     console.log(event.data);
  //   });

  recorder.start();
addControls();



  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  recorder.ondataavailable = function (event) {
    console.log("data ready");
    chunks.push(event.data);
    const videoBlob = new Blob(chunks, { type: "video/webm" });
    console.log(videoBlob);
    console.log(chunks);
    const formData = new FormData();
    formData.append("video", videoBlob, "screen-recording.webm");
  };

  //   recorder.start();

  //   fetch("", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.response;
  //       } else {
  //         console.error;
  //       }
  //     })
  //     .catch((error) => {
  //       console.error;
  //     });
   
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("request recording");
    // console.log(videoBlob)

    sendResponse(`processed : ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: { width: 9999999999, height: 9999999999 },
      })
      .then((stream) => {
        onAccessApproved(stream);
      });

  }

  if (message.action === "stop_recording") {
    console.log("stopping");
    sendResponse(`processed : ${message.action}`);

    if (!recorder) return console.log("no recorder");

    recorder.stop();
  }
});
