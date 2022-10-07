// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//option to use API
function renderLicenseBadge(license) {
  ![license]('https://img.shields.io/badge/license-${data.license}-ff69b4')
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ![Github license]('https://img.shields.io/badge/license-${data.license}-ff69b4')
  ## Description
  ${data.description}
  ##Table of Contents 
  ${data.tableOfContents}
  ##Installation 
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## How to Contribute
  ${data.howToContribute}
  ## License
  ${data.license} `
}

module.exports = generateMarkdown;
