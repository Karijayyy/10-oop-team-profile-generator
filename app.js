const Manager = require("./classes/Manager")
const Engineer = require("./classes/Engineer")
const Intern = require("./classes/Intern")
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateHtml = require("./Utils/generatehtml")
const teamMembers =[]

// create 5 functions
 // create manager

function createManager (){
inquirer.prompt([
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
.then(answers => {
    let tempManager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber,)
teamMembers.push(tempManager)
//call 4th function of what we want to do next 
})
}
 // create engineer

function createEngineer (){
    inquirer.prompt([
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
    .then(answers => {
        let tempEngineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub,)
    teamMembers.push(tempEngineer)
    //call 4th function of what we want to do next 
    })
    }

     // create intern
     function createIntern (){
        inquirer.prompt([
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
        .then(answers => {
            let tempIntern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool,)
        teamMembers.push(tempIntern)
        //call 4th function of what we want to do next 
        })
        }

// create ask what they want to do next function. giving an array of choices to pick from. 
 // create function fs write file after their finished 
