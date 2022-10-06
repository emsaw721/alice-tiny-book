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
    {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like the README to contain a table of contents?',
        default: false
    },
    { 
        type: 'checkbox',
        name: 'tableOfContents',
        message: 'Which sections would you like to add to the table of contents?',
        choices: ['[Installation](#installation)', '[Usage](#usage)', '[Credits](#credits)', '[License](#license)']
    },
    { 
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed (Required).',
        validate: nameInput => {
            if (nameInput) {
                return true
            }else{
                console.log('Please provide instructions and examples for use.')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Provide names of any collaborators, third-party assets that require attribution, or any consulted tutorials.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please link your license here (Required).',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter a link to license.')
                return false 
            }
        }
    },
    {
        type: 'input',
        name: 'howToContribute',
        message: 'If your app or package allows for contributors, include the guidlines for how they may do so.'
    },
])
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
