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

  playlistData.songs.forEach((song) => {
    const songItem = document.createElement("div");
    songItem.style.color = "white";
    songItem.style.marginBottom = "1rem";
    const songText = document.createElement("div");
    songText.innerHTML = `
      <strong>${song.title}</strong>
      <div><small>${song.artist} | ${song.genre}</small></div>
    `;

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = song.audioSrc;
    audio.style.width = "100%";
    audio.style.marginTop = "0.5rem";


    audio.addEventListener("play", () => {
      document.querySelectorAll("audio").forEach((el) => {
        if (el !== audio) {
          el.pause();
        }
      });
    });



songItem.appendChild(audio);

    songList.appendChild(songItem);
  });

  main.appendChild(songList);
  return main;
};
