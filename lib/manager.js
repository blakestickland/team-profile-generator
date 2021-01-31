const Employee = require('./employee');

// Manager class adds office number to parent (Employee) properties.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return Manager;
    }
}

module.exports = Manager;


