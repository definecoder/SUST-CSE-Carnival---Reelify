// content_script.js

console.log("hi");

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message);
  var textValueContainer = document.getElementById("text-value");
  textValueContainer.textContent = message.textValue;
});
