let html = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Profile Generator</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.3/flatly/bootstrap.min.css" />
</head>

<body>`
const Employee = require('./classes/Employee')
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");

const generateHTML = (myTeam) => {
  myTeam.forEach (person =>{
    if (person.getRole() === "Manager"){
      createManager(person);
    }
    else if (person.getRole() === "Engineer"){
      createEngineer(person);
    }
    else {
      createIntern(person);
    }
  }); 
  return html += `</body>

  </html>`
}

    const createManager = (manager) => {
      
        return html += `<div class="card" style="width: 18rem;">
        <div class="card-header" id="Manager">
          Featured
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.getName()}</li>
          <li class="list-group-item">${manager.getId()}</li>
          <li class="list-group-item">${manager.getEmail()}</li>
          <li class="list-group-item">${manager.getOfficeNumber()}</li>
          <li class="list-group-item">${manager.getRole()}</li>


        </ul>
      </div>`
    }
    const createEngineer = (engineer) => {
        
        return html += `<div class="card" style="width: 18rem;">
        <div class="card-header" id="Engineer">
          Featured
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.getName()}</li>
          <li class="list-group-item">${engineer.getId()}</li>
          <li class="list-group-item">${engineer.getEmail()}</li>
          <li class="list-group-item">${engineer.getOfficeNumber()}</li>
          <li class="list-group-item">${engineer.getRole()}</li>


        </ul>
      </div>`

    }
    const createIntern = (intern) => {
        
        return html += `<div class="card" style="width: 18rem;">
        <div class="card-header" id="Intern">
          Featured
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.getName()}</li>
          <li class="list-group-item">${intern.getId()}</li>
          <li class="list-group-item">${intern.getEmail()}</li>
          <li class="list-group-item">${intern.getOfficeNumber()}</li>
          <li class="list-group-item">${intern.getRole()}</li>


        </ul>
      </div>`

    }

    module.exports = generateHTML
