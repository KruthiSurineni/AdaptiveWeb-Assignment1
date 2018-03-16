  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        alert("User "+request.Type);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/logActions", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send('{"Content-Type": request.Type},{"Content":request.Content}');
      }
    
  );