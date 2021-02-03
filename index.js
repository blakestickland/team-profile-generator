// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateTemplate } = require('./src/generateTemplate');
const { generateManagerCard } = require('./src/generateManagerCard');
const { generateEngineerCard } = require('./src/generateEngineerCard');
const { generateInternCard } = require('./src/generateInternCard');

// Import Classes from lib folder
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { number } = require('yargs');
const { run } = require('jest');


// Use Inquirer to ask questions in a recursive loop and store results to an Array called 'team'.

class Questions {
    constructor() {
        this.team = [];
    }
    start() {
        // initialising
        this.anotherTeamMember();
    }
    
    anotherTeamMember() {
        inquirer.prompt([
            // Add a team member?
            {
                type: "confirm",
                name: "addTeamMember",
                message: "Would you like to add a team member?"
            }
        ]).then((response) => {
            if (response.addTeamMember) {
                this.whatTypeOfEmployee();
            } else {
                this.generateHtml();
            }
        });
    }
    whatTypeOfEmployee() {
        inquirer.prompt([
            // What type of employee? 
            {
                type: "list",
                name: "type",
                message: "What role would you like to add to your team?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                ]
            } 
        ]).then((response) => {
            if (response.type === "Manager") {
                this.askManagerQuestions();
            } else if (response.type === "Engineer") {
                this.askEngineerQuestions();
            } else if (response.type === "Intern") {
                this.askInternQuestions();
            } 
        });
    }
    
    askManagerQuestions() {
        inquirer.prompt([
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
                name: "officeNumber",
                message: "What is your office number?"
            }       
        ]).then((response) => {
            let manager = new Manager(response.name, response.id, response.email, 'Manager', response.officeNumber); // { name: "", type: "" }
            this.team.push(manager);
            this.anotherTeamMember()
        })
    }
    
    askEngineerQuestions() {
        inquirer.prompt([
            // engineer questions
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
        ]).then((response) => {
            let engineer = new Engineer(response.name, response.id, response.email, 'Engineer', response.githubUsername); // { name: "", type: "" }
            this.team.push(engineer);
            this.anotherTeamMember()
        })
    }
    
    askInternQuestions() {
        inquirer.prompt([
            // intern questions
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
        ]).then((response) => {
            let intern = new Intern(response.name, response.id, response.email, 'Intern', response.school); // { name: "", type: "" }
            this.team.push(intern);
            this.anotherTeamMember()
        })
    }
    
    
    generateHtml() {
        let cards = "";
        // loop through team created by user
        this.team.forEach((element) => {
            let role = element.role

            // Generate a card in html for each employee entered.
            switch (role) {

                case "Manager":
                         const managerCard = generateManagerCard(element);
                         cards += managerCard;
                    break;

                case "Engineer":
                         const engineerCard = generateEngineerCard(element);
                         cards += engineerCard;
                    break;

                case "Intern":
                         const internCard = generateInternCard(element);
                         cards += internCard;
                         break;
                         
            }
                    
        });
       
        // add cards html to overall html template
        const generatedHtml = generateTemplate(cards);
        fs.writeFile(`./generated_html_files/team.html`, generatedHtml, () => {
        }); 
    };
};

const questions = new Questions();

questions.start();
