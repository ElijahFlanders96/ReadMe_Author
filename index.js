const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { promisify } = require('util');

const questions = require('./QT/questions');
const generateREADME = require('./QT/template');

const writeFileAsync = promisify(writeFile);

console.log('Ready to generate a professional README?');

function promptUser() {
    return prompt(questions);
}

async function init() {
      try {
      const answers = await promptUser();
      
      console.log(JSON.stringify(answers, null, '\t'));
  
          const readme = generateREADME(answers);
  
      await writeFileAsync('sampleREADME.md', readme);
  
          console.log('Successfully wrote to README.md');
      } catch (err) {
          console.log(err);
      }
  }
  
  init();