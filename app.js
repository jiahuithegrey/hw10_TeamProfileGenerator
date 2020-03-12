const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMainHtml = require("./lib/generateMainHtml.js");
const writeFileAsync = util.promisify(fs.writeFile);

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const questions = require("./lib/Questions");

init();

function init() {
  inquirer.prompt(questions.titleQues).then(function(res) {
    if (res.title === "Manager") {
      getManager(questions.managerQues);
    }
    if (res.title === "Engineer") {
      getEngineer(questions.engineerQues);
    }
    if (res.title === "Intern") {
      getIntern(questions.internQues);
    }
    if (res.title === "Done") {
      writeToHTML();
    }
  });
}

const teamArr = [];
let teamName;

function getManager(ques) {
  inquirer.prompt(ques).then(
    function(res) {
      teamName = res.teamName;
      const manager = new Manager(
        res.managerName,
        res.managerID,
        res.managerEmail,
        res.managerRmNum
      );
      teamArr.push(manager);

      init(); 
    },
    function(err) {
      console.log(err);
    }
  );
}

function getEngineer(ques) {
  inquirer.prompt(ques).then(function(res) {
    const engineer = new Engineer(
      res.engineerName,
      res.engineerID,
      res.engineerEmail,
      res.githubName
    );
    teamArr.push(engineer);

    init();
  });
}

function getIntern(ques) {
  inquirer.prompt(ques).then(function(res) {
    const intern = new Intern(
      res.internName,
      res.internID,
      res.internEmail,
      res.school
    );
    teamArr.push(intern);

    init();
  });
}

function writeToHTML() {
  generateMainHtml(teamArr);
  console.log("Successfully wrote to html!");
  let html = generateMainHtml(teamArr);
  writeFileAsync(`./output/${teamName}_Profile.html`,html);
}
