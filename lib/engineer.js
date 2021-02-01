const Employee = require('./Employee');

// Engineer class adds Github username to parent (Employee) properties.
class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
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

