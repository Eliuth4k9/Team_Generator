const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(name, email, id, officeNumber, githubName) {
        super(name, email, id);
        this.github = githubName;
        this.office = officeNumber;
        this.position = 'Manager';

    }
}

module.exports = Manager