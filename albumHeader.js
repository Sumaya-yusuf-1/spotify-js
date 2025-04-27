const albumHeader = () => {
    const album = document.createElement('div');
    album.classList.add('album-album');
    album.style.display = 'flex';
    album.style.alignItems = 'center';
    album.style.padding = '1rem';
    album.style.gap = "20px";
    album.style.backgroundColor = '#1e1e1e';
    album.style.color = 'white';
  
    const albumInfo = document.createElement('div');
    albumInfo.style.display = 'flex';
    albumInfo.style.alignItems = 'center';
    albumInfo.style.gap = '1rem';
  
    const albumImage = document.createElement('img');
    albumImage.src = 'src/images/istockphoto-1324638796-612x612.jpg'; 
    albumImage.alt = 'Album Cover';
    albumImage.style.width = '150px';
    albumImage.style.height = '150px';
    albumImage.style.borderRadius = '8px';
  
    const albumText = document.createElement('div');
    albumText.style.display = 'flex'; // add this
    albumText.style.flexDirection = 'column'; // vertical stacking
    albumText.style.gap = '0.5rem';
  
    const albumTitle = document.createElement('h2');
    albumTitle.innerText = 'Album Name';
    albumTitle.style.margin = '0';
  
    const artistName = document.createElement('p');
    artistName.innerText = 'Artist Name';
    artistName.style.margin = '0';
    artistName.style.fontSize = '0.9rem';
  
    const playButton = document.createElement('button');
    playButton.innerText = 'Play';
    playButton.classList.add('play-button');
    playButton.style.border = 'none';
    playButton.style.borderRadius = '20px';
    playButton.style.backgroundColor = '#1db954';
    playButton.style.color = 'white';
    playButton.style.cursor = 'pointer';
    playButton.style.width = '100px'; 
    playButton.style.padding = '0.5rem';
  
    albumText.appendChild(albumTitle);
    albumText.appendChild(artistName);
    albumText.appendChild(playButton); 
  
    albumInfo.appendChild(albumImage);
    albumInfo.appendChild(albumText);
  
    album.appendChild(albumInfo);
  
    return album;
  };

  