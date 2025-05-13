import { albumHeader } from "./albumHeader.js";
import { playlists } from "./data/db.js";
export const playlist = () => {
  const main = document.createElement("main");
  main.classList.add("main");


  const header = albumHeader(playlists); 

  main.appendChild(header);

  return main;
};
