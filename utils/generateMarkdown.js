
function generateMarkdown(data) {
  return `# ${data.title} 
  ![Github license](https://img.shields.io/badge/license-${data.license}-ff69b4.svg)
  ## Description
  ${data.description}

  ## Table of Contents 
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [Tests](#tests)
  [Questions](#questions)
  [License](#license)
 

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Future Iterations 
  ${data.futureIterations}

  ## Credits
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

  ## How to Contribute
  ${data.howToContribute}

  ## License
  <a href= 'https://opensource.org/licenses/${data.license}/'> ${data.license}</a> `
}

module.exports = generateMarkdown;
