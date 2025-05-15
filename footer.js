export const Footer = () => {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
  
    const text = document.createElement("p");
    text.innerText = "© 2025 Soundify. All rights reserved.";
    text.style.justifyContent = "center";
    text.style.textAlign = "center";
    footer.appendChild(text);
  
    return footer;
  };