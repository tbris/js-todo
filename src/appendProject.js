function makeProject(projectObj) {
  let item = document.createElement("div");
  item.textContent = projectObj.name
  item.classList.add("project-item");
  return item;
}

function appendProject(container, projectObj) {
  container.append(makeProject(projectObj));
}

export { appendProject };
