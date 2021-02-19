const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name, email, id, githubName) {
        super(name, email, id);
        this.github = githubName;
        this.position = 'Engineer';

    }
}

module.exports = Engineer