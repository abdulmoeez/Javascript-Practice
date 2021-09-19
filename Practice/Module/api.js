
  function loadClient() {
    gapi.client.setApiKey("AIzaSyDQYb5QU3ZENxlknFbAA3xufpcvwso42XY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API");
        execute();
      },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.playlistItems.list({
        "part": "snippet,contentDetails",
        "maxResults": 50,
        "playlistId": "UUZ8l5LR6fEpUguX5apb-k5Q"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                return response;
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "383316787857-nuf2dbd770gjqhe87hohrs2d8b8tvvdl.apps.googleusercontent.com"});
  });