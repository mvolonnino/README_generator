// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  
  ![license badge](https://img.shields.io/static/v1?label=license&message=${data.license}&color=ff69b4)

  ## Table of Contents
  
  * [Description](#description)

  * [License](#license)

  * [Instalation](#instalation)

  * [Usage](#usage)

  * [Tests](#tests)

  * [Contributing](#contributing)

  * [Questions](#questions)
  
  ## Description:
  * ${data.description}
    
  ## License: 
  * ${data.license}
    
  ## Instalation:
  * ${data.instalation}
  
  ## Usage:
  * ${data.usage}
    
  ## Tests: 
  * ${data.tests}

  ### Contributing: 
  * Link to user's GitHub: https://github.com/${data.contributing}
  * Link to creator's GitHub: https://github.com/mvolonnino
  ### Questions:
  * User's email: ${data.questions}
  * Contact me at my email: mvolonnino12@gmail.com
`;
}

module.exports = generateMarkdown;
