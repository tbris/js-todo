import Containers from "./domContainers";

function toggleNav(e) {
  let sidebarWidth = Containers.sidebar.style.width
  let factor = "0";
  if (!sidebarWidth || sidebarWidth == "0px") {
    factor = window.screen.width > 890 ? "20%" : "65%";
  }
  Containers.sidebar.style.width = factor;
}

Containers.sidebarOpen.addEventListener("click", toggleNav);
Containers.sidebarClose.addEventListener("click", toggleNav);
