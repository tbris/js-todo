import { projectList, projectProto } from "./projectFactory";

projectList[0] = Object.assign(Object.create(projectProto), {
  id: "default", name: "default", todos: {}, count: 0
});
