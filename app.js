const manager = require ("./lib/Manager");
const engineer = require ("./lib/Engineer");
const intern = require ("./lib/Intern");
const questions = require("./lib/Questions");
const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require ("util");
const writeFileAsync = util.promisify(fs.writeFile);

//when to use const when to use let?????
//how to make a cirle till user chooses done?
//ask user their role is
init();

function init(){
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
            getIntern(questions.internQuestions);
        }
        if (res === "Done"){
            writeToHTML();
        }
    });
} 

let teamName;

function getManager(ques){
    inquirer
    .prompt(ques)
    .then (function(res){
        teamName = res.teamName;
        let title = "Manager";
        let managerName = res.managerName;
        let managerID = res. managerID;
        let managerEmail = res. managerEmail;
        let managerRoomNo = res.managerRoomNumber;

        let managerInfo = {
            team: teamName,
            title: title,
            name: managerName,
            id: managerID,
            email: managerEmail,
            room: managerRoomNo
        }
        writeToHTML(managerInfo);
        init(); //start a new round of questions
    }, function (err){
        console.log(err);
    });
}

const generateHTML = require("./lib/generateMainHTML.js");

function writeToHTML(res){
    let html = generateHTML(res);
    writeFileAsync(`${teamName}_Profile.html`,html);
    //console.log("Successfully wrote to html!");
}
// function getEngineer(ques){
//     inquirer
//     .prompt(ques)
//     .then (function(res){
//         let engineerName = res.engineerName;
//         let engineerID = res. engineerID;
//         let engineerEmail = res. engineerEmail;
//         let repoName = res.repoName;

//         let engineerInfo = {
//             name: engineerName,
//             id: engineerID,
//             email: engineerEmail,
//             repo: repoName
//         }
//         writeToHTML(engineerInfo);
//         init();
//     });
// }
// function getIntern(ques){
//     inquirer
//     .prompt(ques)
//     .then (function(res){
//         let internName = res.internName;
//         let internID = res. internID;
//         let internEmail = res. internEmail;
//         let internSchool = res.internSchool;

//         let internInfo = {
//             name: internName,
//             id: internID,
//             email: internEmail,
//             repo: internName
//         }
//         writeToHTML(internInfo);
//         init();
//     });
// }