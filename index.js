const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./src/page-template.js");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];

// Function to prompt user to input Manager's details
function promptManager() {
    console.log("Please enter the details of the team manager:");
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Manager's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Manager's email:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Manager's office number:",
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptEmployeeType();
    });
}

// Function to prompt user to input Employee's type

function promptEmployeeType() {

    console.log("\nPlease choose the type of employee you want to add:");
    
    inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "Select employee type:",
            choices: ["Engineer", "Intern", "Finish building team"],
        }
    ]).then(answer => {
        if (answer.type === "Engineer") {
            promptEngineer();
        } else if (answer.type === "Intern") {
            promptIntern();
        } else {
            generateTeamHtml();
        }
    });
}
