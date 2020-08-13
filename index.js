// Install inquirer by typing "npm install inquirer" in the console

// required libraries
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown");

// writeFileAsync to link init()
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project: ",
      name: "title",
    },
    {
      type: "input",
      message: "Please enter a description of your project: ",
      name: "description",
    },
    {
      type: "list",
      message: "Please select one of the following for license: ",
      choices: ["Apache", "ISC", "MIT", "None"],
      name: "license",
    },
    {
      type: "input",
      message: "What are the steps required to install your project: ",
      name: "instalation",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use of your project: ",
      name: "usage",
    },
    {
      type: "input",
      message:
        "Provide any examples for tests for your project or how to run them: ",
      name: "tests",
    },
    {
      type: "input",
      message:
        "List your GitHub username for contributing to this project! Just add your username and a link will appear for you in the readme file: ",
      name: "contributing",
    },
    {
      type: "input",
      message:
        "Any questions or concerns, please contact me at my linked URL and add your email here: ",
      name: "questions",
    },
  ]);
}

// function to write README file
promptUser()
  .then(function (answers) {
    console.log("answers", answers);

    const readME = generateMarkdown(answers);

    return writeFileAsync("README.md", readME);
  })
  .then(function () {
    console.log("Succesfully created README.md");
  })
  .catch(function (error) {
    console.log(error);
  });

// function call to initialize program
// init();
