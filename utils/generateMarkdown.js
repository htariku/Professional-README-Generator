// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badge = '';
    if(license === 'MIT') {
        badge = '![GitHub licence](https://img.shields.io/github/issues/htariku/'
    } else {
        badge = ''
    }
    return badge;
 };
     
 
 // TODO: Create a function that returns the license link
 // If there is no license, return an empty string
 function renderLicenseLink(license) {}
 const licenseLink = '';
 if(license === 'MIT') {
     licenseLink = 'https://choosealicense.com/licenses/mit/' 
 } else {
     licenseLink = ''
 };
 
 // TODO: Create a function that returns the license section of README
 // If there is no license, return an empty string
 function renderLicenseSection(license) {
     const licenseSection = ''
     if(license === 'None') {
         licenseSection = ''
     } else {
         licenseSection = 
         `License: ${license}`
     }
     return licenseSection
 }
 
 // TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
   return `# ${data.title}
   
   https://github.com${data.Username}/${data.Title}
 
   # Description
   ${data.Description}
 
   # Table of Cinetnts: 
   *[Installation](#Installation)
   *[Usage](#Usage)
   *[License](#License)
   *[Contributors](#Contributors)
   *[Tests](#Tests)
   *[Questions](#Questions)
 
   # Installation 
   The following must be installed to run the application properly: ${data.Installation}
 
   # Usage 
   In order to use this application, ${data.Usage}
 
   # License 
   This project is licensed under the ${data.License} license.
   
   ![GitHub licence](https://img.shields.io/github/issues/htariku/
 
   ## Contributors 
   Contributors:
 
   # Tests 
   The following is necesscary in order to run the test:
 
   # Questions 
   If you have any further questions or inquieres about the repository, feel free to open an issue or contact ${data.Username} at: ${data.Email}.
 
   
 `;
 }
 
 module.exports = generateMarkdown;
 
 