class Employee {
    // Employee constructor has three properties: name, id, email
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    // Method which prompts for name
    getName() {
        if (typeof this.name !== "string" || !this.name.trim().length) {
            throw new Error("Expected 'name' to be not be blank.");
        }
        return this.name;
    }
    getId() {
        // TODO find out if we can use a number here (at Number)
        // if (typeof this.id !== Number || !this.id.trim().length) {
        //     throw new Error("Expected 'id' to be not be blank and have a number.");
        // }
        return this.id;
    }
    getEmail() {
        if (typeof this.email !== "string" || !this.email.trim().length) {
            throw new Error("Expected 'email' to be a non-emptry string");
        }
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}
module.exports = Employee;
