// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') return 'This project is not licensed.';
  return `This project is licensed under the ${license} license.`;
}

// Function to get current date
function getCurrentDate() {
  return new Date().toLocaleDateString();
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Overview
${data.description}

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Features
${data.features.split(',').map(feature => `- ${feature.trim()}`).join('\n')}

## Getting Started

### Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation
\`\`\`bash
${data.installation}
\`\`\`

## Usage
${data.usage}

${data.screenshot ? `
### Demo
![Application Screenshot](${data.screenshot})
` : ''}

## Technologies
${renderTechBadges(data.technologies)}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
\`\`\`bash
${data.tests}
\`\`\`

## Questions
For questions or concerns, please contact me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

---
*Generated with ❤️ using AutoDOCulus*
`;
}

// Function to render technology badges
function renderTechBadges(technologies) {
  if (!technologies || technologies.length === 0) return '';
  
  const badges = {
    'JavaScript': '![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)',
    'Node.js': '![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)',
    'Python': '![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)',
    'React': '![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)',
    'HTML': '![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)',
    'CSS': '![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)',
  };

  return technologies.map(tech => badges[tech] || tech).join('\n');
}

module.exports = generateMarkdown;
