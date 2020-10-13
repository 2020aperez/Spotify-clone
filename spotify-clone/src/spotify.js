// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start///#endregion

// Once my log in button is clicked it will redirect you to the spotifys login page.
export const authEndpoint = "https://accounts.spotify.com/authorize";
// This is the client ID from Spotify when you registered.
const clientId = "65b3983df21746eb954ca6ebee1c8f6e";
// After authorization/ logged-in it will redirect you back to the home page you created.
const redirectUri = "https://spotify-clone-67000.web.app"; //"http://localhost:3000/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
