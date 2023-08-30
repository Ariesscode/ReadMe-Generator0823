const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

function init() {
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
        message: 'Enter table of contents (optional).Standard table of contents given.',
        default: ""
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step details.',
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
        message: 'List your collaborators.(optional)',
        default: ""
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for this app.',
        choices: ['MIT','BSD 3-Clause License','Boost Software License 1.0','The_unlicense','Mozilla Public License 2.0','Apache 2.0 License','GNU_GPLv3'],
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
        message: 'Enter tests guidelines (dependencies needed), if any. Provide how to run them here.',
        default: ""
    }
  ]).then((answers) => {
    console.log("Success..Finalizing..")
    const readMeContent = generateMarkdown(answers);
    writeToFile('README.md', readMeContent);
})
.catch((err) => console.log(err));
}

function writeToFile (filename,data) {
    try {
        fs.writeFileSync(filename,data);
        console.log(`${filename} was generated successfully!`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}


init();
