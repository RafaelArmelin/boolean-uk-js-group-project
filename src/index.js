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
    technologies: [],
    search: "",
  },
};

const jobs = [
  
     {
      id: 1,
      company: "Barclays",
      position: "Software Engineer",
      salary: {
        min: 60000,
        max: 120000,
      },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugit.",
      technologies: ["javascript", "react"],
      experienceLevel: "junior",
      timeWhenPosted: 8,
    },
    {
      id: 1,
      company: "Apple",
      position: "Software Engineer",
      salary: {
        min: 60000,
        max: 120000,
      },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugit.",
      technologies: ["javascript", "react"],
      experienceLevel: "junior",
      timeWhenPosted: 8,
    },
    {
      id: 1,
      company: "Amazon",
      position: "Senior Shopify Developer",
      salary: {
        min: 60000,
        max: 120000,
      },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugit.",
      technologies: ["javascript", "react"],
      experienceLevel: "junior",
      timeWhenPosted: 8,
    },
    {
      id: 1,
      company: "Starbucks",
      position: "Software Engineer",
      salary: {
        min: 60000,
        max: 120000,
      },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugit.",
      technologies: ["javascript", "react"],
      experienceLevel: "junior",
      timeWhenPosted: 8,
    },
    {
      id: 1,
      company: "Google",
      position: "Software Engineer",
      salary: {
        min: 60000,
        max: 120000,
      },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugit.",
      technologies: ["JavaScript", " React", "PHP"],
      experienceLevel: "junior",
      timeWhenPosted: 8,
    },
];

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
      technologies: ["javascript", "react"],
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
      technologies: ["javascript", "react", "angular"],
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

function renderFilterByTechnologyForm() {
  const technologyFormEl = document.createElement("form");
  technologyFormEl.id = "technology-form";
  filterFormsWrapperEl.append(technologyFormEl);

  const technologySelectEl = document.createElement("select");
  technologySelectEl.id = "technologies";
  technologySelectEl.name = "technologies";
  technologyFormEl.append(technologySelectEl);

  const defaultOptionEl = document.createElement("option");
  defaultOptionEl.setAttribute("value", "");
  defaultOptionEl.innerText = "Technology";
  technologySelectEl.append(defaultOptionEl);

  const technologies = [
    "javascript",
    "react",
    "java",
    "angular",
    "mysql",
    "php",
    "typescript",
    "nodejs",
  ];
  technologies.forEach((technology) => {
    const technologyOptionEl = document.createElement("option");
    technologyOptionEl.setAttribute("value", `${technology}`);
    technologyOptionEl.innerText = `${
      technology.charAt(0).toUpperCase() + technology.slice(1)
    }`;
    technologySelectEl.append(technologyOptionEl);
  });
}

function filterBySearch() {
  const searchFormElem = document.createElement("form");
  searchFormElem.id = "search-jobs-form";
  searchFormElem.setAttribute("autocomplete", "off");
  filterSectionEl.append(searchFormElem);

  const searchBarInputElem = document.createElement("input");
  searchBarInputElem.id = "search-jobs";
  searchBarInputElem.setAttribute("name", "search-jobs");
  searchBarInputElem.setAttribute("type", "text");
  searchBarInputElem.setAttribute(
    "placeholder",
    "Search by position or language"
  );
  searchFormElem.append(searchBarInputElem);
}

function renderAppointmentsButton() {
  const filterSectionEl = document.querySelector(".filter-section");

  const appointmentsWrapperEl = document.createElement("div");
  appointmentsWrapperEl.className = "appointments-wrapper";
  filterSectionEl.append(appointmentsWrapperEl);

  const appointmentsButtonEl = document.createElement("button");
  appointmentsButtonEl.className = "appointments-button";
  appointmentsButtonEl.innerText = "My appointments";
  appointmentsButtonEl.addEventListener("click", (event) => {
    console.log("click");
  });
  appointmentsWrapperEl.append(appointmentsButtonEl);

  const appointmentsListWrapperEl = document.createElement("div");
  appointmentsListWrapperEl.className = "appointments-list";
  appointmentsWrapperEl.append(appointmentsListWrapperEl);
}
renderAppointmentsButton();

function renderAppointmentsList(appointments) {
  console.log("Inside renderAppointmentsList: ", appointments);

  const appointmentsListWrapperEl =
    document.querySelector(".appointments-list");

  const appointmentsWrapperEl = document.createElement("div");
  appointmentsWrapperEl.className = "appointment-wrapper";
  appointmentsListWrapperEl.append(appointmentsWrapperEl);

  const ulEl = document.createElement("ul");
  appointmentsWrapperEl.append(ulEl);

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
const rootEl = document.querySelector("#root")
console.log("ROOT: ", rootEl);



function renderJobList(jobs){

  const mainEl = document.createElement("main");
  rootEl.append(mainEl);

  const divEl = document.createElement("div");
  mainEl.append(divEl);

  const listEl = document.createElement("ul");
  listEl.className = ("cardList","center");
  // listEl.className = ("center");
  divEl.append(listEl);


  for(let i=0; i < jobs.length; i++){

    const job = jobs[i];

  const listItemEl = document.createElement("li");
  listItemEl.className = ("jobCard")
  listEl.append(listItemEl);

  const headingEl = document.createElement("h2");
  headingEl.innerText = `Company: ${job.company}`;
  
  listItemEl.append(headingEl);

  const paragraphEl = document.createElement("p");
  paragraphEl.innerText = `Position: ${job.position}`;
  listItemEl.append(paragraphEl);

  const spanEl = document.createElement("span");
  spanEl.innerText = `Salary: $${job.salary.min} - $${job.salary.max}`;
  listItemEl.append(spanEl);  

  const descriptionEl = document.createElement("p");
  descriptionEl.innerText = `Description: ${job.description}`
  listItemEl.append(descriptionEl);

  const technologiesDivEl = document.createElement("div");
  technologiesDivEl.className = ("div_container")
  listItemEl.append(technologiesDivEl);

  for(let i=0; i<job.technologies.length; i++){

  const technology = job.technologies[i];

  const technologiesEl = document.createElement("div");
  technologiesEl.innerText = `${technology}`;
  technologiesEl.className = "technologies_bt_style"
  technologiesDivEl.append(technologiesEl);
  }

  const buttonEl = document.createElement("button");
  buttonEl.innerText = "Book Interview";
  listItemEl.append(buttonEl);
  }
  
}
renderJobList(jobs);
