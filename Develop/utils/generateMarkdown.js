function makeBadge(license) {
  if(license === 'None'){
    return ""
  }else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${makeBadge(data.license)}
## Description
${data.description}
## Table Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [GitHub](#github)
* [Email](#email)

${data.license === 'None'? "": "* [License](#license)"}

## Installation
${data.install}
`;

}

module.exports = generateMarkdown;
