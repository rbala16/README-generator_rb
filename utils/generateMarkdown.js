// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Project Title
  ${data.title}
  ${data.licenseOptions}

  # Description
${data.description}

# Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#username)
    
# Installation
${data.installation}

# Usage
${data.usage}

# License 
${data.license}

# Contributing 
${data.contributing}

# Tests
${data.tests}

# Questions
# My Contact Information is mentioned here ,contact me with any questions :
* GitHub Username: ${data.username}
* Contact Email: ${data.email}

_This README is generated with README generator
`;
}


module.exports = generateMarkdown;
