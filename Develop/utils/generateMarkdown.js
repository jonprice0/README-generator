// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else if (license === "Eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]";
  }
  else return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Eclipse") {
    return "(https://opensource.org/licenses/EPL-1.0)";
  }
  else return "";
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This software is distributed under the MIT license.";
  } else if (license === "Apache") {
    return "This software is distributed under the Apache license.";
  } else if (license === "Eclipse") {
    return "This software is distributed under the Eclipse license.";
  }
  else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

<a name="description"></a>
## Description:

${data.description}

## Table of Contents:
1. [ Description ] (#description)
2. [ Installation ] (#install)
3. [ Usage ] (#usage)
4. [ License ] (#license)
5. [ Contributing ] (#contribute)
6. [ Tests ] (#test)
7. [ Questions] (#question)

<a name="install"></a>
## Installation:

${data.install}

<a name="usage"></a>
## Usage:

${data.usage}

<a name="license"></a>
## License:

${renderLicenseSection(data.license)}

<a name="contribute"></a>
## How to contribute:

${data.contribute}

<a name="test"></a>
## How to test:

${data.test}

<a name="question"></a>
## Questions:

If you have any questions about this project you can find me on [GitHub](https://github.com/${data.username}) or email me at ${data.email}!

`;
}

module.exports = generateMarkdown;
