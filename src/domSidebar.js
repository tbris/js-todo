import Containers from "./domContainers";

function toggleNav(e) {
  if (!Containers.sidebar.style.width || Containers.sidebar.style.width == "0px") {
    let factor = window.screen.width > 890 ? "20%" : "65%";
    Containers.sidebar.style.width = factor;
  } else {
    Containers.sidebar.style.width = "0";
  }
}

Containers.sidebarOpen.addEventListener("click", toggleNav);
Containers.sidebarClose.addEventListener("click", toggleNav);
