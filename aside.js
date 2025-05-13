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

   
  
    const items = [
      { text: "Liked Songs", className: "liked-songs" },
      { text: "YOUR TOP 2025", className: "your-top-2025" },
      { text: "Discover Weekly", className: "discoverWeekly" },
      { text: "Rock Classics", className: "rockClassics" },
      { text: "Chill Vibes", className: "chillVibes" }
    ];
  
    const counts = [
      { text: "5 songs", className: "liked-songs-count" },
      { text: "10 songs", className: "your-top-2025-count" },
      { text: "15 songs", className: "discoverWeekly-count" },
      { text: "20 songs", className: "rockClassics-count" },
      { text: "25 songs", className: "chillVibes-count" }
    ];
  
    items.forEach((item, index) => {
      const lists = document.createElement("li");
      lists.classList.add("library-item");
  
      const Span = document.createElement("span");
      Span.classList.add(item.className);
      Span.innerText = item.text;
  
      const countSpan = document.createElement("span");
      countSpan.classList.add("count-container", counts[index].className);
      countSpan.innerText = counts[index].text;
  
      lists.style.display = "flex";
      lists.style.justifyContent = "space-between";
      lists.style.marginRight= "20PX"
      lists.style.alignItems = "center";
  
      lists.appendChild(Span);
      lists.appendChild(countSpan);
      asideList.appendChild(lists);
    });
  
    asideContainer.appendChild(asideTitle);
    asideContainer.appendChild(asideList);
    asideEl.appendChild(asideContainer);
  
    return asideEl;
  };
  
 