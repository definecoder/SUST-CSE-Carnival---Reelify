console.log("Reelify is on");

var text = document.getElementById("text-field");

var button = document.getElementById("submit-button");

button.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("Button clicked");
  console.log(text.value);
  sessionStorage.setItem("textValue", text.value);

  // Now I want to route to another page and pass the value of text to that page
  chrome.tabs.create(
    {
      url: `http://localhost:3000/Dashboard?text=${text.value}`, // URL of the destination page
      active: true,
    },
    function (tab) {
      // After the tab is created, send the value to the content script of the new tab
      chrome.tabs.sendMessage(
        tab.id,
        { textValue: text.value },
        function (response) {
          console.log("Message sent to content script");
        }
      );
    }
  );
});
