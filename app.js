const inquirer = require("inquirer");
const writeRender = require('./writeRender');
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const generateHTML = require('./htmlDoc');
let userId = ()=> Math.floor(Math.random() * 5050);
let officeNum = ()=>Math.floor(Math.random() * 8500);
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
                    
                    generateHTML(teamArray);
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
            var newEngineer = new Engineer(engineerRes.name, engineerRes.email, userId(), engineerRes.github, officeNum());
            
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
            },
            {
                name: "github",
                type: "input",
                message: "What is your github Username?"
            }
        ]).then(function (internRes) {
            var newIntern = new Intern(internRes.name, internRes.email, userId(),internRes.school, internRes.github, officeNum());
             
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
                name: "github",
                type: "input",
                message: "What is your github Username?"
            },

        ]).then(function (managerRes) {
            var newManager = new Manager(managerRes.name, managerRes.email, userId(),officeNum(), managerRes.github);
        
            console.log(newManager);
            teamArray.push(newManager);
            addUser();
        });
        
    }
    
    function buildHTML() {
        
        generateHTML(teamArray);
    
};

function addUser(){
    inquirer.prompt([
        {   
            name: "continue",
            message: "Do you want to add another team member?",
            type: "confirm"
        }
    ]).then(function(confirmRes){
        confirmRes.continue ? promptUser() : buildHTML()
    })
};

promptUser();



