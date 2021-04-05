import Containers from "./domContainers";

function openNav(e) {
  let factor = window.screen.width > 890 ? "30%" : "65%";
  Containers.sidebar.style.width = factor;
}

function closeNav(e) {
  Containers.sidebar.style.width = "0";
}

Containers.sidebarOpen.addEventListener("click", openNav);
Containers.sidebarClose.addEventListener("click", closeNav);
