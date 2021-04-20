const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateHtml = require("./Utils/generatehtml")
const teamMembers = [];
//call fs save
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
function writeHTML() {
  return writeToFile("generateTeam.html", generateHtml(teamMembers));
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What kind of employee would you like to enter?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "UserNameChoice",
      },
    ])
    .then((answers) => {
      if (answers.UserNameChoice === "Manager") {
        createManager();
      } else if (answers.UserNameChoice === "Engineer") {
        createEngineer();
      } else createIntern();
      return;
    });
}

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the managers name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What's your ID?",
        name: "managerId",
      },
      {
        type: "input",
        message: "What's your email?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What's your office number?",
        name: "managerOfficeNumber",
      },
    ])
    .then((answers) => {
      let tempManager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamMembers.push(tempManager);
      promptExit();
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the engineers name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What's your ID?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What's your email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What's your git Hub account?",
        name: "engineerGitHub",
      },
    ])
    .then((answers) => {
      let tempEngineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGitHub
      );
      teamMembers.push(tempEngineer);
      promptExit();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the interns name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What's your ID?",
        name: "internId",
      },
      {
        type: "input",
        message: "What's your email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What school did the intern attend?",
        name: "internSchool",
      },
    ])
    .then((answers) => {
      let tempIntern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamMembers.push(tempIntern);
      promptExit();
    });
}
function promptExit() {
  inquirer
    .prompt([
      { type: "confirm", message: "Would you like to exit?", name: "Exit" },
    ])

    .then((answers) => {
      console.log(answers);
      // what do i want to check?
      // I want to check what the answer was yes or no
      // if the answer is yes then exit
      //if the answer was no then go back to the list
      let shouldExit = answers.Exit;
      console.log(shouldExit);
      if (shouldExit === true) {
          // generate html when they're finished
          writeHTML();
        return;
      } else {
          promptUser();
      }

    });
}

promptUser();
