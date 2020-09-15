import { getEducations, getUser } from "./components";

const render = () => {
  const location = window.location.href;
  const start = location.lastIndexOf("users/") + 6;
  const id = location.substring(start);
  getEducations(id);
  getUser(id);
};

render();
