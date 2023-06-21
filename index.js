// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

//Create a function to display license badges
function licenseOptions(value){
  if(value === "Apache 2.0 License"){
    return"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  else if(value === "BSD 3-Clause License" ){
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  else if(value === "GNU GPL v3"){
return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if(value === "IBM Public License Version 1.0"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
}
else if(value === "MIT"){
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
}
else if(value === "Mozilla Public License 2.0"){
  return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
}
else{
  return"[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
}



}


// TODO: Create an array of questions for user input
const questions = [
  //title
  {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
   
    },
    //Project Description
    {
      type: 'input',
      name: 'description',
      message: 'Write a brief description of your project?',
   
    },
    //Installation
    {
      type: 'input',
      name: 'installation',
      message: 'Whart are the installation instructions of your project?',
    
    },
    //Usage
    {
      type: 'input',
      name: 'usage',
      message: 'Please explain how can we use this project?',
     
    },
    //License
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license for this project?',
      choices:[
        "Apache 2.0 License",
        "BSD 3-Clause License",
        "GNU GPL v3",
        "IBM Public License Version 1.0",
        "MIT",
        "Mozilla Public License 2.0",
        "Open Database License (ODbL)"
      ],
    
    },
    //Contribution
    {
      type: 'input',
      name: 'contributing',
      message: 'Who are the contributors to your project?',
     
    },
    //Tests
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter any testing instructions you would like to provide for this project?',
      
    },
  //username
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
     
    },
    //email
    {
      type: 'input',
      name: 'email',
      message: 'What is your email-address?',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
  err ? console.log(err) : console.log('Successfully created README File!')
);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data)=>{
    console.log(data);
    data.licenseOptions = licenseOptions(data.license);
    writeToFile("./generateREADME.md",data)
  })
}

// Function call to initialize app
init();
