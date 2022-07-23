// Import needed packages:
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input:
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

// Writes a README.md file to the /dist folder
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, (err) => {
        if (err) throw err;
    });
};

// Initializes the app:
function init() {
    return inquirer.prompt(questions)
    .then(userInput => writeToFile('README.md', generateMarkdown(userInput)));
};

// Function call to initialize app
init();
