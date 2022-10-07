const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs'); 


const promptQuestions = questionsData => {


return inquirer 
// returns objects, so don't need an array 
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
      
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to add to the README?',
        choices: ['MIT', 'Fair', 'UPL', 'W3C', 'GPL'], 
        
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
    // turns questionsData into template in generateMarkdown function in generateMarkdown.js
    fs.writeFile('readme.md', readmeTemplate, (err)=> {
        // fs- interact with file system, writes file, file name, information to go into name, error function
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

