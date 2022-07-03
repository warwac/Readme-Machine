// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { questions } = require('statuses');

// TODO: Create an array of questions for user input
const questions = [];
    [
        {
            type: 'input',
            questions:"What is your Project Title?",
            name:'Title',
            validate: (value)=>{if(value){return true} else {return 'Requires Input to Proceed'}}
        }
    ],
    [
        {
            type:'input',
           questions:"Provide a short Description of your project.",
            name:'Description',
            validate: (value)=>{if(value){return true} else {return 'Requires Input to Proceed'}}
        }
    ],
    [
        {
            type:'input',
            questions:'Please provide a screenshot/video of you project',
            name:'Screenshot/Video',
            validate: (value)=>{if(value){return true} else {return 'Requires Input to Proceed'}}
        }
    ],
    [
        {
            type:'input',
            questions:'Any Credits?',
            name:'Credits',
            validate: (value)=>{if(value){return true} else {return 'Requires Input to Proceed'}}

        }
    ],
    [
        {
            type:'input',
            questions:'What License would you like to use?',
            name:'License',
            validate: (value)=>{if(value){return true} else {return 'Requires Input to Proceed'}}
        }
    ],
    [
        {
            type:'input',
            questions:'What is your GitHub username',
            name:'GitHub',
            validate: (value)=>{if(value){return true} else {return 'Requires Input to Proceed'}}
        }
    ],
    [
        {
            type:'input',
            questions:'What is your Email address',
            name:'Email',
            validate: (value)=>{if(value){return true} else {return 'Requires Input to Proceed'}}
        }
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
