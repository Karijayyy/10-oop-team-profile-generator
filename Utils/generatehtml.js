const Employee = require('./classes/Employee')
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");

//make links for email & git hub profiles
const generateHTML = (myTeam) => {
    const createManager = (manager) => {
        manager.getName();
        manager.getId();
        manager.getEmail();
        manager.getOfficeNumber();
        manager.getRole();
        return `<div class="card" style="width: 18rem;">
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
        engineer.getName();
        engineer.getId();
        engineer.getEmail();
        engineer.getOfficeNumber();
        engineer.getRole();
        return `<div class="card" style="width: 18rem;">
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
        intern.getName();
        intern.getId();
        intern.getEmail();
        intern.getOfficeNumber();
        intern.getRole();
        return `<div class="card" style="width: 18rem;">
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
    // create an array to filter through the different positions per input request

    module.exports = team => {
        // return ` <-------put in html file here
    }
