// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${data.licenseOptions}

  ## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
${data.installation}

## Usage
${data.usage}

## License
🏆

***${data.license}***
${data.licenseOptions}
_To get more information about the license click on license badge_

## Contributing
🧛${data.contributing} is contributing in the project

## Tests
Any test required please mention here:
${data.tests}

## Questions
_Contact Information is mentioned here ,Please feel free to 
contact me with any questions❓:_  <br><br>
**GitHub Username:** ${data.username}

_You can find me on github here:_ (https://github.com/${data.username})
<br>
**📧Email:** ${data.email}

***This README is generated with README generator😇***
`;
}


module.exports = generateMarkdown;
