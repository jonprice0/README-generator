// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use:'
    },
    {
       type: 'input',
       name: 'contribute',
       message: 'Please provide guidelines for developers who want to contribute to this project:' 
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide explicit instructions on how to run necessary tests:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license(s) for this project:',
        choices: ['MIT', 'Apache', 'Eclipse']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(userInput => generateMarkdown(userInput))
    .then(markdown => console.log(markdown))
};

// Function call to initialize app
init();
