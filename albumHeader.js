export const albumHeader = (playlist) => {
  const album = document.createElement("div");
  album.classList.add("album-header");
  album.style.display = "flex";
  album.style.alignItems = "center";
  album.style.gap = "20px";
  album.style.marginBottom= "20px";

  const img = document.createElement("img");
  img.src = playlist.albumImage;
  img.alt = playlist.name;
  img.style.width = "150px";
  img.style.borderRadius = "20px";

  const title = document.createElement("h2");
  title.innerText = playlist.name;
  title.style.color = "white";

  album.appendChild(img);
  album.appendChild(title);
  return album;
};