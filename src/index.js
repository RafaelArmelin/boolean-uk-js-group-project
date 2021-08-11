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
