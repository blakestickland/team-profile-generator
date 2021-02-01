// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { generateTemplate } = require('./src/generateTemplate');

// Import Classes from lib folder
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { number } = require('yargs');

const writeFileAsync = util.promisify(fs.writeFile);

// Define new instance of each Class
const employee = new Employee();
const manager = new Manager();
const engineer = new Engineer();
const intern = new Intern();

// TODO: Create an an array of questions for user input
// TODO: Try a recursive prompt to allow user to choose when to exit prompt.
// Inquirer.js/packages/inquirer/examples/recursive.js

// Make variables needed to store answers.
const managerOutput = [];
const engineerOutput = [];
const internOutput = [];

// Create inital questions to ask the Manager.
const initialQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your team manager name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "office_number",
        message: "What is your office number?"
    }, 
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email address?"
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is their Github Username?"
    }, 
];
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the Intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email address?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of their school?"
    }, 
];
const finishQuestion = [
    {
        type: "list",
        name: "team-member-menu",
        message: "Would you lke to add a team member or finish building your team?",
        choices: ["Engineer",
            "Intern",
            "Finish building team"]
    },    

]

// Use Inquirer to ask questions. 
// TODO: Create a recursive loop based on the user choice from finishQuestion list

function askManager() {
    inquirer.prompt(initialQuestions).then((managerAnswers) => {
        managerOutput.push(managerAnswers.name);
    });
};

function ask() {
    inquirer.prompt(finishQuestion);
    if (answers.team-member-menu === "Engineer") {
        inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
            engineerOutput.push(engineerAnswers.name);
            ask();
        });
    }
    else if (answers.team-member-menu === "Intern"){
        inquirer.prompt(internQuestions).then((internAnswers) => {
            internOutput.push(internAnswers.name);
            ask();
        });
    }
    else if (answers.team-member-menu === "Finish building team"){
        return;
    }
};
function askQuestions() {
    askManager();
    ask();
}; // end of ask() Function


// const askQuestions = () => {
//     return inquirer.prompt([
        // {
        //     type: "input",
        //     name: "name",
        //     message: "What is your team manager name?"
        // },
        // {
        //     type: "input",
        //     name: "id",
        //     message: "What is your employee id?"
        // },
        // {
        //     type: "input",
        //     name: "email",
        //     message: "What is your email address?"
        // },
        // {
        //     type: "input",
        //     name: "office_number",
        //     message: "What is your office number?"
        // }, 
    //     {
    //         type: "list",
    //         name: "team-member-menu",
    //         message: "Would you lke to add a team member or finish building your team?",
    //         choices: ["Engineer",
    //             "Intern",
    //             "Finish building team"]
    //     }      
    // ]);
// };
// const answers = askQuestions();

// switch (answers.role !== "none") {
//         case (answers.role === "Engineer"):
//         const askEngineerQuestions = () => {
//             return inquirer.prompt([
//                 {
//                     type: "input",
//                     name: "githubUsername",
//                     message: "What is your GithHub Username?"
//                 }
//             ])
//         }
//         const answersEngineer = await askEngineerQuestions();
//         const githubUsername = answersEngineer.githubUsername;
//         break;
        
//         case (answers.role === "Intern"):
//         const askEngineerQuestions = () => {
//             return inquirer.prompt([
//                 {
//                     type: "input",
//                     name: "githubUsername",
//                     message: "What is your GithHub Username?"
//                 }
//             ])
//         }
//         const answersIntern = await askInternQuestions();
//         const school = answersIntern.school;
//         break;

//         default:
//             return
// }

// TODO: Create a function to initialize app
const init = async () => {
    try {
  
      const answers = await askQuestions();
  
      const generateTemplate = generateTemplate(answers);
  
      await writeFileAsync(`./dist/${answers.name.split(' ').join('_')}_README.md`, generateTemplate.trim());
  
      console.log('successfully wrote file')
  
    } catch (err) {
      console.log(err);
    }
  };
  
  // Function call to initialize app
  init();
  
