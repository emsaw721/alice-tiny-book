

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ![Github license](https://img.shields.io/badge/license-${data.license}-ff69b4.svg)
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
  <a href= 'https://choosealicense.com/licenses/${data.license}/'> ${data.license}</a> `
}

module.exports = generateMarkdown;
