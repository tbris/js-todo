import { Project } from "./projectFactory";

const Containers = {
  project: document.getElementById("project-list"),
  projectForm: document.getElementById("new-project"),
  todo: document.getElementById("todo-list"),
  todoForm: document.getElementById("new-todo"),
  sidebar: document.getElementById("action-sidebar"),
  sidebarClose: document.getElementById("sidebar-close"),
  sidebarOpen: document.getElementById("sidebar-open"),
  sortChanger: document.getElementById("sort-changer")
};

const Root = {
  currentProject() {
    return document.querySelector(".current-project");
  },
  project(id) {
    return document.querySelector(`[data-project-id="${id}"]`);
  }
}

const DefaultProject = {
  initialize: function() {
    let id = Project("default");
    this.id = id;
    this.element = function() {
      return document.querySelector(`[data-project-id="${this.id}"`);
    };
    return id
  }
}

export { Containers, Root, DefaultProject };
