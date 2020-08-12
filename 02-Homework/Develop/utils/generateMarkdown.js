// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  
  [Description](#description)

  [License](#license)

  [Instalation](#instalation)

  [Usage](#usage)

  [Tests](#tests)

  [Questions](#questions)
  
  ## Description:
  * ${data.description}
    
  ## License: 
  * ${data.license}
  
  ## Instalation:
  * ${data.instalation}
  
  ## Usage:
  * ${data.usage}
    
  ## Contributing: 
  * ${data.contributing}
    
  ### Tests: 
  * ${data.tests}
    
  ### Questions:
  * ${data.questions}
`;
}

module.exports = generateMarkdown;
