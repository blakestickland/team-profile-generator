const Employee = require('./employee');

// Engineer class adds Github username to parent (Employee) properties.
class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
    }

    // Method to get Github username.
    getGithub() {

    }

    getRole() {
        return Engineer;
    }
}


module.exports = Engineer;

