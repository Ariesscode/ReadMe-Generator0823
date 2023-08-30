const inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
        validate: (answer) => {
            if(answer === "") {
                return 'Please enter a valid GitHub Username.'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
        validate: (answer) => {
            if(answer === "") {
                return 'Enter a valid email address.'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project.',
        validate: (answer) => {
            if(answer === ""){
                return 'please enter a title, to move to the next prompt.'
            }
            return true
        }
            
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        validate: (answer) => {
            if(answer === "") {
                return 'A complete README requires a description of the project!'
            }
            return true
        }

    },
    {
        type: 'input',
        name: 'contents',
        message: 'Enter table of contents, if any.',
        default: ""
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        default: ""

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples on how to use this app.',
        validate: (answer) => {
            if(answer === "") {
                return 'A user may need further guidance on how to use the app. Enter valid instructions to make your app more accessible. Stress Free is Key!'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any.',
        default: ""
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for this app.',
        choices: ['MIT','BSD','Boost','The_unlicense','Mozilla','Apache','GNU_GPLv3'],
        default: ""
    },
    {
        type: 'input',
        name: 'features',
        message: 'List any features that this app may have.',
        default: ""
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If you would like other developers to contribute this app or project, you can include guidelines for how to do so.',
        default: ""
        
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests guidelines, if any. Provide how to run them here.',
        default: ""
    }
  ])
  



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
