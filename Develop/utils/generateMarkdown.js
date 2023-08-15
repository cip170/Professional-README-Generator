// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[!GitHub License]((https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](https://choosealicense.com/licenses/${license}/)`;
  }
  return "";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      
      Copyright@ ${license}. All rights reserved.
      
      Licensed under the ${license} license.
      
      See the (https://choosealicense.com/licenses/${license}/); page for more details.`
    )
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents 
* [Installation](#Installations)

* [Usage](#Usage)

* [Credits](#Credits)

* [Contributors](#Contributors)

* [Tests](#Tests)

* [Questions](#Questions)

* [License]${renderLicenseLink(data.license)}

## Installation

If any installations are required, run these commands:

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributors
${data.contributors}

## Tests

To run tests, run these commands:

\`\`\`
${data.test}
\`\`\`

## Questions

For additional questions, contact me at the email provided below. 

  - GitHub: [${data.github}](https://github.com/${data.github}/)
  - Email:  ${data.email}

## Credits

Include any credits below:

\`\`\`
${data.credits}
\`\`\`
`;
}

module.exports = generateMarkdown;
