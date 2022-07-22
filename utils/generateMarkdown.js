// Returns a license badge based on which license is passed in; If there is no license, returns an empty string:
function renderLicenseBadge(license) {
  if (license.toString() === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license.toString() === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else if (license.toString() === "Eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]";
  }
  else return "";
};

// Returns the license link; if there is no license, returns an empty string:
function renderLicenseLink(license) {
  if (license.toString() === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license.toString() === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license.toString() === "Eclipse") {
    return "(https://opensource.org/licenses/EPL-1.0)";
  }
  else return "";
};

// Returns the license section of the README; if there is no license, returns an empty string:
function renderLicenseSection(license) {
  if (license.toString() === "MIT") {
    return "This software is distributed under the MIT license.";
  } else if (license.toString() === "Apache") {
    return "This software is distributed under the Apache license.";
  } else if (license.toString() === "Eclipse") {
    return "This software is distributed under the Eclipse license.";
  }
  else return "";
}

// Generates markdown for the README:
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

<a name="description"></a>
## Description:

${data.description}

## Table of Contents:
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributions](#contributions)
6. [Testing](#testing)
7. [Questions](#questions)

<a name="installation"></a>
## Installation:

${data.install}

<a name="usage"></a>
## Usage:

${data.usage}

<a name="license"></a>
## License:

${renderLicenseSection(data.license)}

<a name="contributions"></a>
## Contributions:

${data.contribute}

<a name="testing"></a>
## Testing:

${data.test}

<a name="questions"></a>
## Questions:

If you have any questions about this project you can find me on [GitHub](https://github.com/${data.username}) or email me at ${data.email}!

`;
};

// Export the generateMarkdown() function for call in index.js
module.exports = generateMarkdown;
