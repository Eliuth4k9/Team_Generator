const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name, email, id, githubName, officeNumber) {
        super(name, email, id);
        this.github = githubName;
        this.office = officeNumber;
        this.position = 'Engineer';

    }
}

module.exports = Engineer