const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teammates = [];

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please build your team!\nWhat is the manager\'s name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the manager\'s ID?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the manager\'s Email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?'
        },

    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)
        teammates.push(manager);
        addTeammates();
    })
}
addManager();

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer\'s name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineer\'s ID?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer\'s Email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s github username?'
        },

    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github)
        teammates.push(engineer);
        addTeammates();
    })
}



function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the intern\'s ID?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s Email?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern\'s School?'
        },

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        teammates.push(intern);
        addTeammates();
    })
}



function addTeammates() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choose',
            message: 'Which type of members would you like to add?',
            choices: ['Engineer', 'Intern', 'No more members!']
        }
    ]).then(answers => {
        if (answers.choose === 'Engineer') {
            addEngineer();
        } else if (answers.choose === 'Intern') {
            addIntern();
        } else {
            fs.writeFile(outputPath, render(teammates), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        }
    })
}
































// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
