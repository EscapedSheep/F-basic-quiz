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
    const jsonRes = await response.json();
    $("#intro").html(createIntro(jsonRes.name, jsonRes.age));
    $("#avatar").attr("src", jsonRes.avatar);
    $("#self-desc").html(jsonRes.description);
  } catch (e) {
    console.log(e);
  }
};

export const getEducations = async (id) => {
  try {
    const response = await fetch(`${url}/${id}/educations`);
    const jsonRes = await response.json();
    jsonRes.sort((eduFirst, eduSecond) => eduFirst.year - eduSecond.year);
    jsonRes.forEach((edu) =>
      $("#educations").append(
        createEducation(edu.year, edu.title, edu.description)
      )
    );
  } catch (e) {
    console.log(e);
  }
};
