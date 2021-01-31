const Employee = require('./employee');

// Intern class adds school to parent (Employee) properties.
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // Method to find school of intern.
    getSchool() {

    }

    getRole() {
        return Intern;
    }
}


module.exports = Intern;