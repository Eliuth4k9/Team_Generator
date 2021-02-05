const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(name, email, id, schoolInfo, githubName, officeNumber) {
        super( name, email, id);
        this.github = githubName;
        this.school = schoolInfo;
        this.office = officeNumber;
        this.position = 'Intern';
    }
}

module.exports = Intern; 