const questions = { //questions is an object {}
    //staff role choices
    staffRoleQuestion =
    {
        type: "list",
        message: "What's your role?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern","done"]
    },

    //managerQuestions is an array []
    managerQuestions: [
        {
            type: "list",
            message: "What's your team's name?",
            name: "teamName",
            validate: function(input){
                if (input.length === 0){
                    console.log("Please enter a valid team's name.");
                }
            }
        },
        {
            type: "input",
            message: "What's your name?",
            name: "managerName",
            validate: function(input){
                if (input.length === 0 || !input.match(/^[a-zA-Z]+$/)) {
                    console.log("Please enter a valid name with letters only.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What's your ID?",
            name: "managerID",
            validate: function(input){
                if (input.length === 0 || !input.match(/^[0-9]+$/)) { 
                    console.log("Please enter a valid ID number.");
                    return false;
                }
                return true;
        },
        {
            type: "input",
            message: "What's your Email?",
            name: "managerEmail",
            validate: function(input){
                if (input.length === 0 || !input.match(/^[w-.+]+@[a-zA-Z0-9.]+.[a-zA-Z0-9]{2,4}$/)){
                    console.log("Please enter a valid email.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What's your room number?",
            name: "managerRoomNumber",
            validate: function(input){
                if (input.length === 0 || !input.match(/^[0-9]+$/)) { 
                    console.log("Please enter a valid room number.");
                    return false;
                }
                return true;
        }
    ],

    //engineer
    engineerQuestions: [
        {
            type: "input",
            message: "What's your name?",
            name: "engineerName",
            validate: function(input){
                if (input.length === 0 || !input.match(/^[a-zA-Z]+$/)) {
                    console.log("Please enter a valid name with letters only.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What's your ID?",
            name: "engineerID",
            validate: function(input){
                if (input.length === 0 || !input.match(/^[0-9]+$/)) { 
                    console.log("Please enter a valid ID number.");
                    return false;
                }
                return true;
        },
        {
            type: "input",
            message: "What's your Email?",
            name: "engineerEmail",
            validate: function(input){
                if (input.length === 0 || !input.match(/^[w-.+]+@[a-zA-Z0-9.]+.[a-zA-Z0-9]{2,4}$/)){
                    console.log("Please enter a valid email.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What's your Github name?",
            name: "githubName",
            validate: function(input){
                if (input.length === 0) {
                    console.log("Please enter a valid github username");
                    return false;
                }
                return true;
            }
        }
    ],

    //intern
    internQuestions: [
        {
            type: "input",
            message: "What's your name?",
            name: "internName",
            validate: function(input){
                if (input.length === 0 || !input.match(/^[a-zA-Z]+$/)) {
                    console.log("Please enter a valid name with letters only.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What's your ID?",
            name: "internID",
            validate: function(input){
                if (input.length === 0 || !input.match(/^[0-9]+$/)) { 
                    console.log("Please enter a valid ID number.");
                    return false;
                }
                return true;
        },
        {
            type: "input",
            message: "What's your Email?",
            name: "internEmail",
            validate: function(input){
                if (input.length === 0 || !input.match(/^[w-.+]+@[a-zA-Z0-9.]+.[a-zA-Z0-9]{2,4}$/)){
                    console.log("Please enter a valid email.");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What's your school?",
            name: "school",
            validate: function(input){
                if (input.length === 0 || !input.match(/^[a-zA-Z]+$/)) {
                    console.log("Please enter a school name");
                    return false;
                }
                return true;
            }
        }
    ]
}

module.exports = questions;


//https://www.formget.com/form-validation-using-javascript/