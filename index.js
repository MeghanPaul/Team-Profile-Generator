const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const inquirer = require("inquirer");
const { writeFile, copyFile } = require("./utils/generateHTML");
const generateHTML = require("./src/page-template");

let teamArr = [];

const managerQuestionsArr = [
  {
    type: "input",
    name: "name",
    message: "Enter the manager's name: ",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the manager's name: ");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Enter the manager's id number: ",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the manager' id number: ");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter the manager's email: ",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the manager's email: ");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter the manager's office number: ",
    validate: (numberInput) => {
      if (numberInput) {
        return true;
      } else {
        console.log("Please enter the manager's office number: ");
        return false;
      }
    },
  },
];

const employeeQuestionsArr = [
  {
    type: "list",
    name: "choice",
    message: "Select your next action: ",
    choices: ["Add an Engineer", "Add an Intern", "Finish building your team"],
  },
];

function initialPrompt() {
  return inquirer.prompt(managerQuestionsArr);
}

function promptEmployee() {
  inquirer.prompt(employeeQuestionsArr).then(({ choice }) => {
    console.log(choice);
    if (choice == "Add an Engineer") {
      promptEngineer();
    } else if (choice == "Add an Intern") {
      promptIntern();
    } else {
      console.log(teamArr);
      generatePage(teamArr);
    }
  });
}

function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name? ",
      },
      {
        type: "input",
        name: "id",
        message: "What is their id? ",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email? ",
      },
      {
        type: "input",
        name: "gitHubUsername",
        message: "What is their GitHub username? ",
      },
    ])
    .then((engData) => {
      const engineer = new Engineer(
        engData.name,
        engData.id,
        engData.email,
        engData.gitHubUsername
      );
      teamArr.push(engineer);
      promptEmployee();
    });
}

function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your intern's name? ",
      },
      {
        type: "input",
        name: "id",
        message: "What is their id? ",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email? ",
      },
      {
        type: "input",
        name: "school",
        message: "What is their school? ",
      },
    ])
    .then((internData) => {
      const intern = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );
      teamArr.push(intern);
      promptEmployee();
    });
}

initialPrompt()
  .then((managerData) => {
    console.log(managerData);
    const manager = new Manager(
      managerData.name,
      managerData.id,
      managerData.email,
      managerData.officeNumber
    );
    teamArr.push(manager);
    console.log(teamArr);
    console.log(4);
    promptEmployee();
  })
  .catch((err) => {
    console.log(err);
  });

function generatePage(teamData) {
  new Promise(function(resolve, reject){
    resolve(generateHTML(teamData));
  })
    .then((pageHTML) => {
      console.log(pageHTML);
      return writeFile(pageHTML);
    })
    .then((writeFileResponse) => {
      console.log(writeFileResponse);
      //return copyFile();
    })
    /* .then((copyFileResponse) => {
      console.log(copyFileResponse);
    })
     */.catch((err) => {
      console.log(err);
    });
}
