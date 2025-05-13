import { playlist } from "./playlist.js";

// This replaces the current main with a new one
export function renderPlaylist(playlistData) {
  const oldMain = document.getElementById("main");
  const newMain = playlist(playlistData); // Create new <main> for selected playlist

  oldMain.replaceWith(newMain); // ✅ swap the old with the new
}