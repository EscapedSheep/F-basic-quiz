const createIntro = (name, age) =>
  `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME/CV`;

const createEducation = (year, title, desc) =>
  `<div class="education">
     <h4 class="edu-year">${year}</h4>
     <div class="edu-content">
     <h4 class="edu-title">${title}</h4>
     <p class="edu-desc">${desc}</p>
    </div>`;

const url = "http://localhost:8080/users";

export const getUser = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    return await response.json();
  } catch (e) {
    return e;
  }
};

export const getEducations = async (id) => {
  try {
    const response = await fetch(`${url}/${id}/educations`);
    const jsonRes = await response.json();
    return jsonRes;
  } catch (e) {
    return e;
  }
};

export const renderUser = (user) => {
  $("#intro").html(createIntro(user.name, user.age));
  $("#avatar").attr("src", user.avatar);
  $("#self-desc").html(user.description);
};

export const renderEducations = (educations) => {
  educations.sort((eduFirst, eduSecond) => eduFirst.year - eduSecond.year);
  educations.forEach((edu) =>
    $("#educations").append(
      createEducation(edu.year, edu.title, edu.description)
    )
  );
};
