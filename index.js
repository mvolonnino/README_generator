// Install inquirer by typing "npm install inquirer" in the console

// required libraries
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./02-Homework/Develop/utils/generateMarkdown");

// writeFileAsync to link init()
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your project? ",
      name: "title",
    },
    {
      type: "input",
      message: "Please enter a description of your project: ",
      name: "description",
    },
    {
      type: "checkbox",
      message: "Please select one of the following for license: ",
      choices: ["Apache License 2.0", "MIT", "BSD 2 'simplified'", "None"],
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
        "List any of the collaborators, if any, with links to their GitHub profiles (including your own): ",
      name: "contributing",
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
        "Any questions or concerns, please contact me with link to my GitHub ",
      name: "questions",
    },
  ]);
}
// function generate markdown
// function generateReadMe(data) {
//   return `
//   # ${data.title}

//   ## Table of Contents

//   *[Description](#description)
//   *[License](#license)
//   *[Instalation](#instalation)
//   *[Usage](#usage)
//   *[Tests](#tests)
//   *[Questions](#questions)

//   ## Description:
//     *${data.description}

//   ## License:
//     *${data.license}

//   ## Instalation:
//     *${data.instalation}

//   ## Usage:
//     *${data.usage}

//   ## Contributing:
//     *${data.contributing}

//   ### Tests:
//     *${data.tests}

//   ### Questions:
//     *${data.questions}
//     `;
// }

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

// function to initialize program

// function call to initialize program
// init();
