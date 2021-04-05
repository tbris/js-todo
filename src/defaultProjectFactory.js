import { projectList, projectProto } from "./projectFactory";

projectList["default"] = Object.assign(Object.create(projectProto), {
  id: "default", name: "default", todos: {}, count: 0
});
