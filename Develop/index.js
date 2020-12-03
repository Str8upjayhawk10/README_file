const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the project title?"
},
{
    type: "input",
    name: "description",
    message: "What is the project description?"
},
{
    type:"list",
    name:"license",
    message: "What is the project license",
    choices:['MIT','GPL 3.0', 'None']
},
{
    type: "input",
    name: "install",
    message: "How to install this project.",
    default: "npm i"
},
{
    type: "input",
    name: "test",
    message: "How to test this project.",
    default: "npm test",
},
{
    type: "input",
    name: "usage",
    message: "What to know when you use this project.",
    default: "feel free to use how ever",
},
{
    type: "input",
    name: "contributing",
    message: "How you can contribute to this project.",
    default: "submit pull request",
},
{
    type: "input",
    name: "github",
    message: "What is your Github user name?",
    default: "str8upjayhawk10",
},
{
    type: "input",
    name: "email",
    message: "What is your email address?",
    default: "str8upjayhawk10@gmail.com",
},
];

// function to write README file
function writeToFile(fileName, data) {
    const fileLocation = path.join(__dirname, fileName)
    return fs.writeFileSync(fileLocation, data)
}
// function to initialize program
function init() {
inquirer.prompt(questions).then(response => {
    console.log(response)
writeToFile('README.md', generateMarkdown(response))
})
}

// function call to initialize program
init();
