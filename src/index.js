// ELEMENTS

const rootEl = document.querySelector("#root");
console.log(rootEl);

// STATE OBJECT

let state = {
  jobs: [],
  appointments: [],
  filters: {
    position: "",
    level: "",
    languages: [],
    search: "",
  },
};

console.log(state);

//  DUMMY DATA
const appointments = [
  {
    id: 1,
    jobId: 1,
    date: "2021-08-10",
    time: "16:30",
    job: {
      id: 1,
      company: "Barclays",
      position: "Software Engineer",
      salary: {
        min: 60000,
        max: 120000,
      },
      languages: ["javascript", "react"],
      experienceLevel: "junior",
      timeWhenPosted: 8,
    },
  },
  {
    id: 2,
    jobId: 2,
    date: "2021-08-10",
    time: "16:30",
    job: {
      id: 2,
      company: "Udemy",
      position: "Frontend Engineer",
      salary: {
        min: 35000,
        max: 60000,
      },
      languages: ["javascript", "react", "angular"],
      experienceLevel: "junior",
      timeWhenPosted: 19,
    },
  },
];

console.log(appointments);

// RENDER FUNCTIONS

// TODO: Create header element and append to rootEl
// TODO: Append to mainEl (Rafael created)

const filterSectionEl = document.createElement("div");
filterSectionEl.className = "filter-section";
rootEl.append(filterSectionEl);

const filterFormsWrapperEl = document.createElement("div");
filterFormsWrapperEl.className = "filter-forms-wrapper";
filterSectionEl.append(filterFormsWrapperEl);

function renderFilterSection() {
  renderFilterByPositionForm();
  renderFilterByLevelForm();
  renderFilterByTechnologyForm();
  filterBySearch();
}

renderFilterSection();

function renderFilterByPositionForm() {
  const positionFormEl = document.createElement("form");
  positionFormEl.id = "position-form";
  filterFormsWrapperEl.append(positionFormEl);

  const positionSelectEl = document.createElement("select");
  positionSelectEl.id = "positions";
  positionSelectEl.name = "positions";
  positionFormEl.append(positionSelectEl);

  const defaultOptionEl = document.createElement("option");
  defaultOptionEl.setAttribute("value", "");
  defaultOptionEl.innerText = "Filter by position";
  positionSelectEl.append(defaultOptionEl);

  const positions = ["front-end", "back-end", "full-stack"];
  positions.forEach((position) => {
    const positionOptionEl = document.createElement("option");
    positionOptionEl.setAttribute("value", `${position}`);
    positionOptionEl.innerText = `${
      position.charAt(0).toUpperCase() + position.slice(1)
    }`;
    positionSelectEl.append(positionOptionEl);
  });
}

function renderFilterByLevelForm() {
  const levelFormEl = document.createElement("form");
  levelFormEl.id = "level-form";
  filterFormsWrapperEl.append(levelFormEl);

  const levelSelectEl = document.createElement("select");
  levelSelectEl.id = "levels";
  levelSelectEl.name = "levels";
  levelFormEl.append(levelSelectEl);

  const defaultOptionEl = document.createElement("option");
  defaultOptionEl.setAttribute("value", "");
  defaultOptionEl.innerText = "Experience level";
  levelSelectEl.append(defaultOptionEl);

  const levels = ["junior", "mid-level", "senior"];
  levels.forEach((level) => {
    const levelOptionEl = document.createElement("option");
    levelOptionEl.setAttribute("value", `${level}`);
    levelOptionEl.innerText = `${
      level.charAt(0).toUpperCase() + level.slice(1)
    }`;
    levelSelectEl.append(levelOptionEl);
  });
}

function renderAppointmentsList(appointments) {
  console.log("Inside renderAppointmentsList: ", appointments);

  const ulEl = document.createElement("ul");
  rootEl.append(ulEl);

  appointments.forEach((appointment) => {
    const appointmentCardEl = document.createElement("li");
    appointmentCardEl.className = "appointment-card";
    ulEl.append(appointmentCardEl);

    const headingEl = document.createElement("h3");
    headingEl.className = "appointment-heading";
    headingEl.innerText = `${appointment.job.company}`;
    appointmentCardEl.append(headingEl);

    const dateWrapperEl = document.createElement("div");
    appointmentCardEl.append(dateWrapperEl);

    const dateSpanEl = document.createElement("span");
    dateSpanEl.innerText = "Date: ";
    dateWrapperEl.append(dateSpanEl);

    const dateEl = document.createElement("span");
    dateEl.className = "date-element";
    dateEl.innerText = `${appointment.date}`;
    dateWrapperEl.append(dateEl);

    const timeWrapperEl = document.createElement("div");
    appointmentCardEl.append(timeWrapperEl);

    const timeSpanEl = document.createElement("span");
    timeSpanEl.innerText = "Time: ";
    timeWrapperEl.append(timeSpanEl);

    const timeEl = document.createElement("span");
    timeEl.className = "time-element";
    timeEl.innerText = `${appointment.time}`;
    timeWrapperEl.append(timeEl);

    const cancelButtonEl = document.createElement("button");
    cancelButtonEl.className = "cancel-button";
    cancelButtonEl.innerText = "Cancel";
    appointmentCardEl.append(cancelButtonEl);
  });
}

renderAppointmentsList(appointments);
