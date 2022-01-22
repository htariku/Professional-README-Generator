// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("utils");

const generatorMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is the title of the project?",
    name: "Title",
    validate: (value) =>{if(value){return true}else{return 'Please enter a value to continue!'}}
  },
  {
    type: "input",
    message: "What is the project about? Give a detailed description",
    name: "discription",
    validate: (value) =>{if(value){return true}else{return 'Please enter a value to continue!'}}
  },
  {
    type: "input",
    message: "Table of Contents.",
    name: "Table of Conetnets",
    validate: (value) =>{if(value){return true}else{return 'Please enter a value to continue!'}}
  },
  {
    type: "input",
    message: "What does the user need to install to run this app?",
    name: "installation",
    validate: (value) =>{if(value){return true}else{return 'Please enter a value to continue!'}}
  },
  {
    type: "input",
    message: "How is the app used? Give Instructions.",
    name: "Usage",
    validate: (value) =>{if(value){return true}else{return 'Please enter a value to continue!'}}
  },
  {
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributing",
    validate: (value) =>{if(value){return true}else{return 'Please enter a value to continue!'}}
  },
  {
    type: "input",
    message: "What license is being used?",
    name: "License",
    chocies: ['MIT Licence', 'GPL Licence', 'GNU License', 'None'],
    validate: (value) =>{if(value){return true}else{return 'Please enter a value to continue!'}}
  },
  {
    type: "input",
    message: "What commands are needed to test this app?",
    name: "Tests",
    validate: (value) =>{if(value){return true}else{return 'Please enter a value to continue!'}}
  },
  {
    type: "input",
    message: "Contact Information",
    name: "Question",
    validate: (value) =>{if(value){return true}else{return 'Please enter a value to continue!'}}
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "Username",
    validate: (value) =>{if(value){return true}else{return 'Please enter a value to continue!'}}
  },
  {
    type: "input",
    message: "What is you email address?",
    name: "Email",
    validate: (value) =>{if(value){return true}else{return 'Please enter a value to continue!'}}
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generatorMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
