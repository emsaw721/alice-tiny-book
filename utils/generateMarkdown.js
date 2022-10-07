// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//option to use API
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
// use this to get other sections, don't forget to add ##
module.exports = generateMarkdown;
