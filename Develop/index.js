// TODO: Include packages needed for this application
// Declaring variables in order to use inquirer & fs
const inquirer = require('inquirer');
const fs = require('fs');

const readMe = (data) => 
`# ${data.title}`

// TODO: Create an array of questions for user input
inquirer
.prompt(
    [
        {type: 'input',
        message: 'Enter a project title',
        name: 'title',
    }]
)

.then((data) => {
    const readMeContent = readMe(data);
    fs.writeFile('./Output/README.md', readMeContent, (err) =>
    err ? console.error(err) : console.log('README file created')
    );
});

/*
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
*/
