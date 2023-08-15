// TODO: Include packages needed for this application
// Declaring variables in order to use inquirer & fs
const inquirer = require('inquirer');
const fs = require('fs');

const readMe = (data) => 
`
# ${data.title}

## Description
${data.description}

## Table of Contents 
-[Installation]
-[Usage]
-[Credits]
-[Contributions]
-[Tests]
-[Questions]
-[License]

## Installation
${data.installation}

##
${data.usage}

##
${data.contribution}

##
${data.test}

##
${data.github}

##
${data.email}

##
${data.questions}

##
${data.credits}

`

// TODO: Create an array of questions for user input
inquirer
.prompt(
    [
        {type: 'input',
        name: 'title',
        message: 'Enter a project title',
    },
        {type: 'input',
        name: 'description',
        message: 'description',
    },
        {type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
    },
        {type: 'input',
        name: 'usage',
        message: 'Enter usage information',
    },
        {type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines',
    },
        {type: 'input',
        name: 'test',
        message: 'Enter test intructions for your application',
    },
        {type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
    },
        {type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
        {type: 'input',
        name: 'questions',
        message: 'Enter any additional questions',
    },
        {type: 'input',
        name: 'credits',
        message: 'Enter any credits',
    },
        {type: 'input',
        name: '',
        message: '',
    }

    ]
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
