// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { generateTemplate } = require('./src/generateTemplate');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const writeFileAsync = util.promisify(fs.writeFile);


const employee = new Employee();

const manager = new Manager();

const engineer = new Engineer();

const intern = new Intern();

