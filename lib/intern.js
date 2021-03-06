const Employee = require('./Employee');

// Intern class adds school to parent (Employee) properties.
class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }

    // Method to find school of intern.
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}


module.exports = Intern;
