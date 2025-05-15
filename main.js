import { aside } from "./aside.js";
import { Header } from "./header.js";
import { playlist } from "./playlist.js";
import { Footer } from "./footer.js";
import { playlists } from "./data/db.js";

function main() {
  const app = document.getElementById("app");
  const headerElement = Header();
  const asideElement = aside();
  const playlistData = playlists[0]; // ✅ pick first playlist, or use .find(...)
  const mainElement = playlist(playlistData);
  const footerElement = Footer();
  const bodySection = document.createElement("div");
  bodySection.classList.add("bodySection");

  bodySection.appendChild(asideElement);
  bodySection.appendChild(mainElement);
  app.appendChild(headerElement);
  app.appendChild(bodySection);
  app.appendChild(footerElement);
}

window.addEventListener("DOMContentLoaded", main);
