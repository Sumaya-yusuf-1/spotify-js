window.addEventListener("DOMContentLoaded", main);

function main() {
  const app = document.getElementById("app");
  const headerElement = Header();
  const asideElement = aside();
  app.appendChild(headerElement);
const main = playlist(); 
  
const bodySection = document.createElement("div"); 
bodySection.classList.add("bodySection"); 




bodySection.appendChild(asideElement);
bodySection.appendChild(main); 
  app.appendChild(bodySection);
 
}

const Header = () => {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const header = document.createElement("header");
  header.classList.add("header");
  header.style.backgroundColor = "black";
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";
  header.style.padding = "0.5rem 1rem";

  const brand = document.createElement("div");
  brand.style.display = "flex";
  brand.style.alignItems = "center";
  brand.style.gap = "0.5rem";

  const logo = document.createElement("img");
  logo.src = "src/images/images.png";
  logo.style.width = "50px";
  logo.style.height = "50px";
  logo.alt = "Logo";

  const title = document.createElement("h1");
  title.innerText = "Soundify";
  title.style.color = "white";
  title.style.margin = "0";

  brand.appendChild(logo);
  brand.appendChild(title);

  header.appendChild(brand);
  header.appendChild(searchBar());
  header.appendChild(navigation());

  headerContainer.appendChild(header);

  return headerContainer;
};

const searchBar = () => {
  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search...";
  searchInput.classList.add("search-input");

  const iconbutton = document.createElement("button");
  iconbutton.classList.add("icon-button");
  iconbutton.style.backgroundColor = "transparent";
  iconbutton.style.border = "none";
  iconbutton.style.color = "white";
  iconbutton.style.cursor = "pointer";
  iconbutton.style.fontSize = "1.5rem";

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-magnifying-glass");
  iconbutton.appendChild(icon);

  inputContainer.appendChild(searchInput);
  inputContainer.appendChild(iconbutton);
  searchContainer.appendChild(inputContainer);

  return searchContainer;
};

const navigation = () => {
  const register = document.createElement("div");
  register.classList.add("navigation");
  register.classList.add("register");
  const signin = document.createElement("button");
  signin.classList.add("signin");
  signin.innerText = "Sign In";
  signin.addEventListener("click", () => alert("clicked!"));

  const signup = document.createElement("button");
  signup.innerText = "Sign Up";
  signup.classList.add("signup");

  register.appendChild(signin);
  register.appendChild(signup);

  return register;
};

