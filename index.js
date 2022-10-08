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
                console.log('Please enter a project title.')
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
        name: 'futureIterations',
        message: 'What will future iterations of this project look like or what are some features that you would like to add in the future?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Provide names of any collaborators, third-party assets that require attribution, or any consulted tutorials.'
    },
    {
      
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to add to the README(Required)?',
        choices: ['MIT', 'Fair', 'UPL', 'W3C', 'GPL'], 
        validate: choicesInput => {
            if (choicesInput){
                return true
            } else {
                console.log('Please select a license choice. You can do this using the up/down arrows and the space bar to select. Press enter when done.')
                return false 
            }
        }
        
    },
    {
        type: 'input',
        name: 'howToContribute',
        message: 'If your app or package allows for contributors, include the guidlines for how they may do so.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Would you like to run a test?',
        default: 'npm test'
    },
    {
        type: 'checkbox',
        name: 'questions',
        message:'Do you have any questions?',
        choices: ['YES', 'NO'],
    },
    {
        type: prev => prev == 'YES',
        name: 'email',
        message: 'For questions about this generated README, you can email me at fakeemail@fake.com'
    }

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

