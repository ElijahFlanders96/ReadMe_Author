const inquirer = require('inquirer');

const questions = require('./QT/questions');
const generateREADME = require('./QT/template');

console.log('Ready to generate a professional README?');

function promptUser() {
    return inquirer(questions);
}