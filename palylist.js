const playlist = () => {

    const main = document.createElement("main"); 
    main.classList.add("main"); 
   

    const palylistContainer = document.createElement("div"); 
    palylistContainer.classList.add("playlist-container");
    palylistContainer.style.backgroundColor = "blue"
  
    main.appendChild(palylistContainer)
  
  
  return main; 
    
}