// ELEMENTS

const rootEl = document.querySelector("#root");
console.log(rootEl);

const headerEl = document.createElement("header");
headerEl.className = "header_class";
rootEl.insertBefore(headerEl, rootEl.firstChild);

const mainEl = document.querySelector(".main_class");

const filterSectionEl = document.createElement("div");
filterSectionEl.className = "filter-section";
mainEl.append(filterSectionEl);

const filterFormsWrapperEl = document.createElement("div");
filterFormsWrapperEl.className = "filter-forms-wrapper";
filterSectionEl.append(filterFormsWrapperEl);

const asideEl = document.createElement("aside");
asideEl.className = "main_appointment";
asideEl.innerHTML = "My Appointments";
mainEl.append(asideEl);

// STATE OBJECT

let state = {
  jobs: [],
  selectedJob: null,
  appointments: [],
  filters: {
    position: "",
    level: "",
    technologies: [],
    search: "",
  },
};

// FETCH FUNCTIONS
fetch("http://localhost:3000/jobs")
  .then((res) => res.json())
  .then((jobsData) => {
    console.log("Inside fetch jobsData: ", jobsData);
    state = {
      ...state,
      jobs: jobsData,
    };
    renderJobList(state.jobs);
  });

fetch("http://localhost:3000/appointments")
  .then((res) => res.json())
  .then((appointmentsData) => {
    console.log("Inside fetch appointmentsData: ", appointmentsData);
    state = {
      ...state,
      appointments: appointmentsData,
    };
    renderAppointmentsList(state.appointments);
  });

// RENDER FUNCTIONS

function renderFilterSection() {
  renderFilterByTechnologyForm();
  renderFilterByPositionForm();
  renderFilterByLevelForm();
  renderFilterBySearch();
}

renderFilterSection();

function renderFilterByPositionForm() {
  const positionFormEl = document.createElement("form");
  positionFormEl.id = "position-form";
  filterFormsWrapperEl.append(positionFormEl);

  const positionSelectEl = document.createElement("select");
  positionSelectEl.id = "positions";
  positionSelectEl.name = "positions";
  positionFormEl.addEventListener("change", (event) => {
    console.log("change");
    state = {
      ...state,
      filters: {
        ...state.filters,
        position: event.target.value,
      },
    };
    console.log(state);
    renderJobList(state.jobs);
  });
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
  levelSelectEl.addEventListener("change", (event) => {
    console.log("change");
    state = {
      ...state,
      filters: {
        ...state.filters,
        level: event.target.value,
      },
    };
    console.log(state);
    renderJobList(state.jobs);
  });
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
  const formContainer = document.createElement("div");
  filterFormsWrapperEl.append(formContainer);

  const technFormHeadingEl = document.createElement("h3");
  technFormHeadingEl.className = "form-heading";
  technFormHeadingEl.innerText = "Filter by technology:";
  formContainer.append(technFormHeadingEl);

  const technologyFormEl = document.createElement("form");
  technologyFormEl.id = "technology-form";
  formContainer.append(technologyFormEl);

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
    const inputEl = document.createElement("input");
    inputEl.setAttribute("type", "checkbox");
    inputEl.setAttribute("name", "technology");
    inputEl.setAttribute("value", `${technology}`);
    inputEl.addEventListener("change", (event) => {
      console.log("change", event.target.value);
      if (event.target.checked) {
        state = {
          ...state,
          filters: {
            ...state.filters,
            technologies: [...state.filters.technologies, technology],
          },
        };
      } else if (!event.target.checked) {
        const filteredTechnologies = state.filters.technologies.filter(
          (technology) => technology !== event.target.value
        );
        state = {
          ...state,
          filters: {
            ...state.filters,
            technologies: filteredTechnologies,
          },
        };
      }
      console.log(state);
      renderJobList(state.jobs);
    });

    technologyFormEl.append(inputEl);

    const inputLabel = document.createElement("label");
    inputLabel.setAttribute("for", "technology");
    inputLabel.innerText = technology;
    technologyFormEl.append(inputLabel);
  });
}

function renderFilterBySearch() {
  const searchFormElem = document.createElement("form");
  searchFormElem.id = "search-jobs-form";
  searchFormElem.setAttribute("autocomplete", "off");
  searchFormElem.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submited");

    const searchValue = document.querySelector("#search-jobs").value;
    console.log("search value: ", searchValue);

    state = {
      ...state,
      filters: {
        ...state.filters,
        search: searchValue,
      },
    };
    console.log(state);
    renderJobList(state.jobs);
  });

  filterSectionEl.append(searchFormElem);

  const searchBarInputElem = document.createElement("input");
  searchBarInputElem.id = "search-jobs";
  searchBarInputElem.setAttribute("name", "search-jobs");
  searchBarInputElem.setAttribute("type", "text");
  searchBarInputElem.setAttribute(
    "placeholder",
    "Search by position or technology"
  );
  searchFormElem.append(searchBarInputElem);
  rootEl.insertBefore(searchFormElem, rootEl.childNodes[1]);
}

const divEl = document.createElement("div");
divEl.className = "main_content";
mainEl.append(divEl);

function renderJobList(jobs) {
  // to reset jobsSectionEl
  divEl.innerHTML = "";

  const listEl = document.createElement("ul");
  listEl.className = ("cardList", "center");
  divEl.append(listEl);

  const filteredJobs = applyUserfilters(state.jobs);

  for (let i = 0; i < filteredJobs.length; i++) {
    const job = filteredJobs[i];

    const listItemEl = document.createElement("li");
    listItemEl.className = "jobCard";
    listEl.append(listItemEl);

    const headingEl = document.createElement("h2");
    headingEl.innerHTML = `<b><u>Company:</u></b> ${job.company}`;

    listItemEl.append(headingEl);

    const paragraphEl = document.createElement("p");
    paragraphEl.innerHTML = `<b><u>Position:</u></b> ${job.jobPosition}`;
    listItemEl.append(paragraphEl);

    const spanEl = document.createElement("span");
    spanEl.innerHTML = `<b><u>Salary:</u></b> $${job.salary.min} - $${job.salary.max}`;
    listItemEl.append(spanEl);

    const descriptionEl = document.createElement("p");
    descriptionEl.innerHTML = `<b><u>Description:</u></b> ${job.description}`;
    listItemEl.append(descriptionEl);

    const technologiesDivEl = document.createElement("div");
    technologiesDivEl.className = "div_container";
    listItemEl.append(technologiesDivEl);

    for (let i = 0; i < job.technologies.length; i++) {
      const technology = job.technologies[i];

      const technologiesEl = document.createElement("div");
      technologiesEl.innerText = `${technology}`;
      technologiesEl.className = "technologies_bt_style";
      technologiesDivEl.append(technologiesEl);
    }

    const buttonEl = document.createElement("button");
    buttonEl.innerText = "Book Interview";
    buttonEl.className = "book_interview_button";
    listItemEl.append(buttonEl);
    buttonEl.addEventListener("click", () => {
      state = {
        ...state,
        selectedJob: job,
      };

      renderBookingForm();
    });
  }
}

// FILTER FUNCTIONS

const appointmentsWrapperEl = document.createElement("div");
appointmentsWrapperEl.className = "appointment-wrapper";
asideEl.append(appointmentsWrapperEl);

function renderAppointmentsList(appointments) {
  console.log("Inside renderAppointmentsList: ", appointments);
  appointmentsWrapperEl.innerHTML = "";

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
    cancelButtonEl.addEventListener("click", (event) => {
      console.log("clicked");

      fetch(`http://localhost:3000/appointments/${appointment.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((appointmentToDelete) => {
          console.log(
            "appointmentToDelete: ",
            appointmentToDelete,
            appointment.id
          );

          const filteredAppointments = state.appointments.filter(
            (obj) => obj.id !== appointment.id
          );

          state = {
            ...state,
            appointments: filteredAppointments,
          };
          renderAppointmentsList(state.appointments);
        });
    });
    appointmentCardEl.append(cancelButtonEl);
  });
}

const bookingSectionEl = document.createElement("section");
bookingSectionEl.className = "booking-section";
filterSectionEl.append(bookingSectionEl);

function renderBookingForm() {
  bookingSectionEl.innerHTML = "";

  const bookingFormContainerEl = document.createElement("div");
  bookingFormContainerEl.className = "booking-form-container";
  bookingSectionEl.append(bookingFormContainerEl);
  bookingFormContainerEl.innerHTML = "";

  const formEl = document.createElement("form");
  formEl.className = "booking_form";
  bookingFormContainerEl.append(formEl);
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submitted");

    const appointmentToCreate = {
      jobId: state.selectedJob.id,
      date: formEl.querySelector("#date").value,
      time: formEl.querySelector("#time").value,
    };

    console.log(
      "document.querySelector for date",
      document.querySelector("#date")
    );

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentToCreate),
    };

    fetch("http://localhost:3000/appointments", fetchOptions)
      .then((res) => res.json())
      .then((newAppointment) => {
        console.log("newAppointment inside POST Fetch: ", newAppointment);

        const foundJob = state.jobs.find(
          (job) => job.id === newAppointment.jobId
        );

        const newAppointmentWithJobObj = {
          ...newAppointment,
          job: foundJob,
        };

        state = {
          ...state,
          appointments: [...state.appointments, newAppointmentWithJobObj],
        };

        console.log("State inside POST fetch: ", state);

        renderAppointmentsList(state.appointments);

        state.appointments = [];
      });
  });

  const appointmentCalendarEl = document.createElement("div");
  formEl.append(appointmentCalendarEl);

  const dateInputEl = document.createElement("input");
  dateInputEl.setAttribute("type", "date");
  dateInputEl.setAttribute("id", "date");
  dateInputEl.setAttribute("name", "date");
  appointmentCalendarEl.append(dateInputEl);

  const timeInputEl = document.createElement("input");
  timeInputEl.setAttribute("type", "time");
  timeInputEl.setAttribute("id", "time");
  timeInputEl.setAttribute("name", "time");
  appointmentCalendarEl.append(timeInputEl);

  const confirmButtonEl = document.createElement("input");
  confirmButtonEl.setAttribute("value", "Confirm Booking");
  confirmButtonEl.setAttribute("type", "submit");
  confirmButtonEl.className = "confirm-button";
  appointmentCalendarEl.append(confirmButtonEl);
}

function applyUserfilters(jobs) {
  const filteredByPosition = filterByPosition(jobs);
  const filteredByLevel = filterByLevel(filteredByPosition);
  const filteredBySearch = filterBySearch(filteredByLevel);
  const filteredByTechnology = filterByTechnology(filteredBySearch);
  return filteredByTechnology;
}

function filterByPosition(jobs) {
  if (state.filters.position === "") {
    return jobs;
  }

  const filteredJobs = jobs.filter(
    (job) => job.position === state.filters.position
  );
  return filteredJobs;
}

function filterByLevel(jobs) {
  if (state.filters.level === "") {
    return jobs;
  }

  const filteredJobs = jobs.filter(
    (job) => job.experienceLevel === state.filters.level
  );
  return filteredJobs;
}

function filterBySearch(jobs) {
  if (state.filters.search === "") {
    return jobs;
  }
  const filteredJobs = jobs.filter(
    (job) =>
      job.jobPosition.toLowerCase().includes(state.filters.search) ||
      job.technologies.includes(state.filters.search)
  );
  return filteredJobs;
}

function filterByTechnology(jobs) {
  if (state.filters.technologies.length === 0) {
    return jobs;
  }

  const filteredJobs = jobs.filter((job) => {
    /* 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    
    The some() method executes the arrow function once for each object present 
    in the state.filters.technologies array until it finds the one where arrow function returns 
    a truthy value (if job.technologies.includes(technology) evaluates to true).
    */
    return state.filters.technologies.some((technology) =>
      job.technologies.includes(technology)
    );
  });
  console.log("filtered jobs: ", filteredJobs);
  return filteredJobs;
}
