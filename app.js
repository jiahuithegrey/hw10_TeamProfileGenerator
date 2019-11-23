const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require ("util");
const writeFileAsync = util.promisify(fs.writeFile);
//const Employee = require("./lib/Employee");
const questions = require("./Questions.js");
const res;
const html

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

function promptUser(){
    return inquirer.prompt(titleQuestion); 
}

function generateHTML(res){
    return html
}
init();