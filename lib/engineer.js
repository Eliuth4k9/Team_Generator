const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name, email, id, githubName) {
        super(name, email, id);
        this.github = githubName;

    }
    getPosition() {
        return "Engineer"
    }
}

module.exports = Engineer