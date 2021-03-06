function generateREADME(answers) {
return `

# ${answers.projTitle}

## Table of Contents
* [Description](#Description)
* [Installation Instruction](#Installation-Instructions)
* [Usage Information](#Usage-Information)
* [Contributions](#Contributions)
* [Testing](#Testing)
* [Questions?](#Questions?)

## Description
${answers.projDescription}

## Installation Instructions
${answers.installInstruct}

## Usage Information
${answers.usageInfo}

## Contributions
${answers.contributions}

## Testing
${answers.test}

## Questions?
Contact the author for further inquiries!<br>
Github link: (https://github.com/${answers.github.trim().toLowerCase()})<br>
Email: ${answers.email}

`;
}

module.exports = generateREADME;