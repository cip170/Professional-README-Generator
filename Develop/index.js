// TODO: Include packages needed for this application
// Declaring variables in order to use inquirer & fs
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const prompts = [
        {type: 'input',
        name: 'title',
        message: 'Enter a project title',
    },
        {type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
        {type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
        default: 'npm i'
    },
        {type: 'input',
        name: 'usage',
        message: 'Enter usage information',
    },
        {type: 'input',
        name: 'contributors',
        message: 'Enter any project contributors',
    },
        {type: 'input',
        name: 'test',
        message: 'Enter test intructions for your application',
        default: 'npm test',
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
        name: 'credits',
        message: 'Enter any credits',
    },
        {type: 'list',
        name: 'license',
        message: 'Enter your project licenses',
        choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'Mozilla Public2.0','Unilicense', 'LGPLv3', 'GPLv3', 'AGPLv3']
        }

    ];

/*
.then((data) => {
    const readMeContent = readMe(data);
    fs.writeFile('./Output/README.md', readMeContent, (err) =>
    err ? console.error(err) : console.log('README file created')
    );
}); */


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),
    data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(prompts)
    .then((inquirerResponse) => {
        console.log("README file created")
        writeToFile("./output/README.md", generateMarkdown({ ...inquirerResponse}))
    })
}

// Function call to initialize app
init();

