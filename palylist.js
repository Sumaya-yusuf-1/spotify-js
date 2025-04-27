const playlist = () => {
  const main = document.createElement("main");
  main.classList.add("main");

  const header = albumHeader();
  const audio = audioPlayer(); 
  main.appendChild(header);
  main.appendChild(audio); 

  return main;
};
