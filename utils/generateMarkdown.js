

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  !(https://img.shields.io/badge/license-${data.license}-ff69b4.svg)
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
  ${data.license} 
  ![Link](https://choosealicense.com/licenses/${data.license}/)`
}

module.exports = generateMarkdown;
