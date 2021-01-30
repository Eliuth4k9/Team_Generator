const inquirer = require("inquirer");
const writeRender = require('./writeRender');
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
var userId = Math.floor(Math.random() * 7000);
var teamArray = [];


function promptUser() {

     inquirer.prompt([
        {
            type: "list",
            name: "position",
            message: "what is your position?",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ]).then(res => {
       
        switch (res.position) {
            
            case "Engineer":
                
                return addEngineer();
            
            case "Intern":
                
                return addIntern();

            case "Manager":

                return addManager();
            
            default:
                
                generateHTML();
        }
    }) 

}
    function addEngineer(){
        inquirer.prompt([
            {
                name: "name",
                message: "What is your given name?",
                type: "input"
            },
            {
                name: "github",
                type: "input",
                message: "What is your github Username?"
            },
            {
                name: "email",
                type: "input",
                message: "What is your email?"
            }
        ]).then(function (engineerRes) {
            var newEngineer = new Engineer(engineerRes.name, engineerRes.email, userId, engineerRes.github);
            userId = userId + 2; 
            console.log(newEngineer);
            teamArray.push(newEngineer);
            addUser();
            
            
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                name: "name",
                message: "What is your given name?",
                type: "input"
            },
            {
                name: "email",
                type: "input",
                message: "What is your email?"
            },
            {
                name: "school",
                type: "input",
                message: "What college did you graduate from?"
            }
        ]).then(function (internRes) {
            var newIntern = new Intern(internRes.name, internRes.email, userId, internRes.school);
            userId = userId + 3; 
            console.log(newIntern)
            teamArray.push(newIntern);
            addUser();
        });
    }

    function addManager() {
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?",
                type: "input"
            },
            {
                name: "email",
                type: "input",
                message: "What is your email?"
            },
            {
                name: "office",
                type: "input",
                message: "What is your office number?"
            }
        ]).then(function (managerRes) {
            var newManager = new Manager(managerRes.name, managerRes.email, userId, managerRes.office);
            userId = userId + 5;
            console.log(newManager);
            teamArray.push(newManager);
            addUser();
        });
        
    }
       
    function generateHTML() {
        writeRender(teamArray);
    
};

function addUser(){
    inquirer.prompt([
        {   
            name: "continue",
            message: "Do you want to add another team member?",
            type: "confirm"
        }
    ]).then(function(confirmRes){
        confirmRes.continue ? promptUser() : generateHTML()
    })
};

promptUser();



