const Employee = require('./Employee');

// Engineer class adds Github username to parent (Employee) properties.
class Engineer extends Employee {
    constructor(name, id, email, role, githubUsername) {
        super(name, id, email, role);
        this.githubUsername = githubUsername;
    }

    // Method to get Github username.
    getGithub() {
        return this.githubUsername;
    }

    getRole() {
        return 'Engineer';
    }
}

// Export the Class
module.exports = Engineer;

