// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs'); 

// TODO: Create an array of questions for user input
const promptQuestions = questionsData => {


return inquirer 
.prompt([
    {
        type: 'input', 
        name: 'title',
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
    { // maybe make this one the pre-filled option 
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
      
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to add to the README?',
        choices: ['MIT', 'another', 'another', 'another', 'another']
    },
    {
        type: 'input',
        name: 'howToContribute',
        message: 'If your app or package allows for contributors, include the guidlines for how they may do so.'
    },

])
.then(questionsData => {
    console.log(questionsData)
    const readmeTemplate= generateMarkdown(questionsData); 
    fs.writeFile('readme.md', readmeTemplate, (err)=> {
        // fs- interact with file system, file name, information to go into name, error function
        if (err) {
           return console.log('error', err)
        }
        console.log('File saved!')
    })
}) .catch(err => {
    console.log(err)
}); 
};

promptQuestions();

