console.log("hi");
document.addEventListener("DOMContentLoaded", () => {
  console.log("clicking");
  const startButton = document.querySelector("#start_btn");
  const stopButton = document.querySelector("#stop_btn");

  // ADDING EVENT LISTENERS
  startButton.addEventListener("click", () => {
    console.log("clicking");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "request_recording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError);
          }
        }
      );
    });
  });

  stopButton.addEventListener("click", () => {
    console.log("clicking");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "stop_recording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError);
          }
        }
      );
    });
  });
});
