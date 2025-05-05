const audioPlayer = () => {
    const title = document.createElement("div");  
    title.classList.add ("audio-title");
    const audioTitle = document.createElement("p"); 
    audioTitle.innerText = "title";
  
    const duration = document.createElement("p"); 
    duration.innerText = "Duration"; 
  
    title.appendChild(audioTitle); 
    title.appendChild(duration);
  


    
    return title;
  };