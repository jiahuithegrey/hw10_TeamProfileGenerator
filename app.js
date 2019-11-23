const employee = require ("./lib/Employee");
const manager = require ("./lib/Manager");
const engineer = require ("./lib/Engineer");
const intern = require ("./lib/Intern");
const questions = require("./lib/Questions");
const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require ("util");
const writeFileAsync = util.promisify(fs.writeFile);

let res;
let html
//when to use const when to use let?????
//ask user their role is
function init(){
    try{
        res = promptUser(questions.titleQuestion);
        return res;
        if (res === "Manager"){
            promptUser(questions.managerQuestions);
        }
        if (res === "Engineer"){
            promptUser(questions.engineerQuestions);
        }
        if (res === "Intern"){
            promptUser(questions.internQuestions);
        }
    
    }catch(err){
        console.log(err);
    }
}

function getManager(){
    inquirer.prompt(questions.mangerQuestions)
    .then (function(res){
        teamName = res.teamName;
        let manager = new 
    })
}

function generateHTML(res){
    return html
}
init();