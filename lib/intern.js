const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(name, email, id, schoolInfo) {
        super( name, email, id);
        this.school = schoolInfo;
        this.position = 'Intern';
    }
}

module.exports = Intern; 