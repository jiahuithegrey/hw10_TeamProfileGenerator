const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const manager = require("./lib/Manager.js");
const engineer = require("./lib/Engineer.js");
const intern = require("./lib/Intern.js");
const questions = require("./lib/Questions.js");
const generateHtml = require("./lib/generateHtml.js");

// const path = require("path");
// const outputPath = path.resolve(__dirname, "output", "team.html");
// const render = require("./lib/htmlRenderer");

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

      writeToHTML(managerInfo);
      init(); //start a new round of questions
    },
    function(err) {
      console.log(err);
    }
  );
}

const generateHTML = require("./lib/generateMainHTML.js");

function writeToHTML(res) {
  let html = generateHTML(res);
  writeFileAsync(`${teamName}_Profile.html`, html);
  //console.log("Successfully wrote to html!");
}
function getEngineer(ques) {
  inquirer.prompt(ques).then(
      function(res) {
        const engineer = new engineer(
            res.engineerName,
            res.engineerID,
            res.engineerEmail,
            res.repoName
        );
    teamArr.push(engineer);

    writeToHTML(engineerInfo);
    init();
  });
}

function getIntern(ques){
    inquirer.prompt(ques).then(
        function(res){
            const intern = new intern(
                res.internName,
                res.internID,
                res.internEmail,
                res.repoName
            );
        teamArr.push(intern);
        
        writeToHTML(internInfo);
        init();
    });
}
