const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateHtml = require("./lib/generateHtml.js");
const writeFileAsync = util.promisify(fs.writeFile);

const manager = require("./lib/Manager.js");
const engineer = require("./lib/Engineer.js");
const intern = require("./lib/Intern.js");
const questions = require("./lib/Questions.js");

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

      writeToHTML(manager);
      init(); //start a new round of questions
    },
    function(err) {
      console.log(err);
    }
  );
}

function getEngineer(ques) {
  inquirer.prompt(ques).then(function(res) {
    const engineer = new engineer(
      res.engineerName,
      res.engineerID,
      res.engineerEmail,
      res.repoName
    );
    teamArr.push(engineer);

    writeToHTML(engineer);
    init();
  });
}

function getIntern(ques) {
  inquirer.prompt(ques).then(function(res) {
    const intern = new intern(
      res.internName,
      res.internID,
      res.internEmail,
      res.repoName
    );
    teamArr.push(intern);

    writeToHTML(intern);
    init();
  });
}

let html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Team</title>
      <!-- Latest compiled and minified CSS & JS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <script src="https://code.jquery.com/jquery.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="https://kit.fontawesome.com/4d07055d3e.js" crossorigin=“anonymous”></script>
      <style>
          .shadow {
              box-shadow: 5px 5px 5px grey;
          }
      </style>
  </head>
  <body>
      <div class="container-fluid p-0 mb-0">
          <div class="jumbotron jumbotron-fluid bg-danger text-light">
              <div class="container text-center">
                  <h1 class="display-4">My Team</h1>
              </div>
          </div>
          <div class="container">
              <div class="row justify-content-center" id="cards">
  `;

let close = `
        </div> 
        </div> 
      </body>
    </html>;`;

function writeToHTML() {
  for (let i = 0; i < teamArr.length; i++) {
    const card = generateHtml(teamArr[i]);
    html += card;
  }
  html += close;
  console.log("Successfully wrote to html!");
  writeFileAsync(`./output/${teamName}_Profile.html`, html);
}
