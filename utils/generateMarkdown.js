

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ![Github license](https://img.shields.io/badge/license-${data.license}-ff69b4.svg)
  ## Description
  ${data.description}

  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## How to Contribute
  ${data.howToContribute}
  ## License
  <a href= 'https://opensource.org/licenses/${data.license}/'> ${data.license}</a> `
}

module.exports = generateMarkdown;
