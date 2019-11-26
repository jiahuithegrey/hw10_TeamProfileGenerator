const employee = require ("./lib/Employee");
const manager = require ("./lib/Manager");
const engineer = require ("./lib/Engineer");
const intern = require ("./lib/Intern");
const questions = require("./lib/Questions");
const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require ("util");
const writeFileAsync = util.promisify(fs.writeFile);

let teamName;

//when to use const when to use let?????
//ask user their role is
inquirer
    .prompt(questions.titleQuestion)
    .then (function(res){
        if (res === "Manager"){
            getManager(questions.managerQuestions);
        }
        if (res === "Engineer"){
            getEngineer(questions.engineerQuestions);
        }
        if (res === "Intern"){
            getUser(questions.internQuestions);
        }
    });

function getManager(ques){
    inquirer
    .prompt(ques)
    .then (function(res){
        teamName = res.teamName;
        let managerName = res.managerName;
        let managerID = res. managerID;
        let managerEmail = res. managerEmail;
        let managerRoomNo = res.managerRoomNumber;

        let managerInfo = {
            team: teamName,
            name: managerName,
            id: managerID,
            email: managerEmail,
            room: managerRoomNo
        }
        writeToHTML(managerInfo);
    });
}

function writeToHTML(res){
    let managerHTML = manager(res);
    writeFileAsync(`$(teamName)_Profile.html`),managerHTML);
    console.log("Successfully wrote to html!");
}