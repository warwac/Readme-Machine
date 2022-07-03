// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { questions } = require('statuses');

// TODO: Create an array of questions for user input
const questions = [];
    [
        {
            type: 'input',
            message:"What is your Project Title?",
            name:'Title',
            validate: (value)=>{if(value){return true} else {return 'Requires Input to Proceed'}}
        }
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
