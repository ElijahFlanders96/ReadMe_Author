const questions = [
    {
        // Project title
        type: "input",
        message: "What is the title of your project?",
        name: "projTitle"
    },
    {
        //Project description
        type: "input",
        message: "What is a description of your project?",
        name: "projDescription"
    },
    {
        //Installation Instructions
        type: "input",
        message: "What are the installation instructions of your project?",
        name: "installInstruct"
    },
    {
        //Usage information
        type: "input",
        message: "What is the usage information of your project?",
        name: "usageInfo"
    },
    {
        //Credit/thanks
        type: "input",
        message: "What or who contributed to this project?",
        name: "contributions"
    },
    {
        //Testing
        type: "input",
        message: "Please list all testing procedures:",
        name: "test"
    },
    {
        //Github username
        type: "input",
        message: "What is your github username?",
        name: "github"
    },
    {
        //Email
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
]

module.exports = questions;