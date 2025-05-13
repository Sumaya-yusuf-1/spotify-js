export const albumHeader = (playlist) => {
  const album = document.createElement("div");
  album.classList.add("album-header");

  const img = document.createElement("img");
  img.src = playlist.albumImage;
  img.alt = playlist.name;
  img.style.width = "150px";

  const title = document.createElement("h2");
  title.innerText = playlist.name;

  album.appendChild(img);
  album.appendChild(title);
  return album;
};