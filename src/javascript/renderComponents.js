import {
  getEducations,
  getUser,
  renderEducations,
  renderUser,
} from "./components";

const render = async () => {
  try {
    // TODO feedback: 获取user id的逻辑可以抽象
    const location = window.location.href;
    const start = location.lastIndexOf("users/") + 6;
    const id = location.substring(start);
    const educations = await getEducations(id);
    const user = await getUser(id);
    renderUser(user);
    renderEducations(educations);
  } catch (e) {
    console.log(e);
  }
};

render();
