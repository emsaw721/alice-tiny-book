// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const promptQuestions = () => {

const questions = [];

if (!questions) {
    questions = []; 
}
return inquirer 
.prompt([
    {
        type: 'input', 
        name: 'name',
        message: 'What is the title of the project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true; 
            } else {
                console.log('Please enter a project title with the following format: #<project-title>')
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project (Required).',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a project description.')
                return false; 
            }
        }
    },
    {},
])
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
