import { playlists } from "./data/db.js";
import { renderPlaylist } from "./router.js"; 

export const aside = () => {
  const asideEl = document.createElement("aside");
  asideEl.classList.add("aside");

  const asideContainer = document.createElement("div");
  asideContainer.classList.add("aside-container");

  const asideTitle = document.createElement("h2");
  asideTitle.innerText = "YOUR LIBRARY";
  asideTitle.classList.add("aside-title");

  const asideList = document.createElement("ul");
  asideList.classList.add("aside-list");

  playlists.forEach((playlist) => {
    const listItem = document.createElement("li");
    listItem.classList.add("library-item");
    listItem.style.display = "flex";
    listItem.style.justifyContent = "space-between";
    listItem.style.marginRight = "20px";
    listItem.style.alignItems = "center";
    listItem.style.cursor = "pointer";

    const nameSpan = document.createElement("span");
    nameSpan.innerText = playlist.name;

    const countSpan = document.createElement("span");
    countSpan.innerText = `${playlist.songs.length} songs`;
    countSpan.classList.add("count-container");

    // ✅ Handle click to switch playlist
    listItem.addEventListener("click", () => {
      renderPlaylist(playlist);
    });

    listItem.appendChild(nameSpan);
    listItem.appendChild(countSpan);
    asideList.appendChild(listItem);
  });

  asideContainer.appendChild(asideTitle);
  asideContainer.appendChild(asideList);
  asideEl.appendChild(asideContainer);

  return asideEl;
};