import { albumHeader } from "./albumHeader.js";

export const playlist = (playlistData) => {
  const main = document.createElement("main");
  main.classList.add("main");
  main.id = "main";

  if (!playlistData) {
    main.textContent = "No playlist data provided.";
    return main;
  }

  const header = albumHeader(playlistData);
  main.appendChild(header);

  
  const songList = document.createElement("div");
  songList.classList.add("playlist-container");
  songList.style.padding = "1rem";

  playlistData.songs.forEach(song => {
    const songItem = document.createElement("div");
    songItem.style.color = "white";
    songItem.style.marginBottom = "1rem";
    songItem.innerHTML = `
      <strong>${song.title}</strong> - ${song.duration}<br/>
      <audio controls src="${song.audioSrc}" style="width: 100%; margin-top: 0.5rem;"></audio>
    `;
    songList.appendChild(songItem);
  });

  main.appendChild(songList);
  return main;
};