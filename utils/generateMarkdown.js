// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badge = '';
    if(license === 'MIT') {
        badge = '![GitHub licence](https://img.shields.io/github/issues/htariku/Professional-README-Generator)'
    } else {
        badge = ''
    }
    return badge;
 };
     
 
 // TODO: Create a function that returns the license link
 // If there is no license, return an empty string
 function renderLicenseLink(license) {
 const licenseLink = '';
 if(license === 'MIT') {
     licenseLink = 'https://choosealicense.com/licenses/mit/' 
 } else {
     licenseLink = ''
 }
 return licenseLink;
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
   return `#Title: Professional-README-Generator
   
   https://github.com${data.Username}/${data.Title}
 
   # Description
   GIVEN a command-line application that accepts user input
   WHEN I am prompted for information about my application repository
   THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
   WHEN I enter my project title
   THEN this is displayed as the title of the README
   WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
   THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
   WHEN I choose a license for my application from a list of options
   THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
   WHEN I enter my GitHub username
   THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
   WHEN I enter my email address
   THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
   WHEN I click on the links in the Table of Contents
   THEN I am taken to the corresponding section of the README

   https://watch.screencastify.com/v/2tZdnutuPwlCHezDBdia
   
   <iframe src="https://drive.google.com/file/d/1VPreYuLysdVvavkiNbqHcmb4KYD4gyeK/preview" width="640" height="480"></iframe>
 
   # Table of Cinetnts: 
   *[Installation](#Installation)
   *[Usage](#Usage)
   *[License](#License)
   *[Contributors](#Contributors)
   *[Tests](#Tests)
   *[Questions](#Questions)
 
   # Installation 
   The following must be installed to run the application properly: Node, Inquirer, npm package, starter code
 
   # Usage 
   In order to use this application: ${data.Usage}
 
   # License 
   This project is licensed under the ${data.License} license.
   
   ![GitHub licence](https://img.shields.io/github/license/htariku/Professional-README-Generator)
 
   ## Contributors 
   Contributors: Xandromous, gchoi2u; original source code: https://github.com/coding-boot-camp/potential-enigma
 
   # Tests 
   The following is necesscary in order to run the test:
 
   # Questions 
   If you have any further questions or inquieres about the repository, feel free to open an issue or contact my GitHub at ${data.Username} or my email at: ${data.Email}.
 
   
 `;
 }
 
 module.exports = generateMarkdown;
