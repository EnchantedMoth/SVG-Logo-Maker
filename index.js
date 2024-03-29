const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Triangle, Square} = require('./lib/shapes')

const questions = [
    {
        type: 'input',
        message: 'Which letters would you like in your logo? (1-3 letters)',
        name: 'letters',
        validate: function(input) {
            if (input.length > 3 || input.length === 0) {
                return 'Please enter 1 to 3 letters'
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What color would you like the letters to be? (you can use a color keyword or a hexadecimal)',
        name: 'letterColor'
    },
    {
        type: 'list',
        message: 'Which shape would you like to use?',
        name: 'shape',
        choices: ['Circle','Triangle','Square']
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be? (you can use a color keyword or a hexadecimal)',
        name: 'shapeColor'
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Generated logo.svg'))
};


function generateSVG(data) {
    let chosenShape;
    switch(data.shape) {
        case 'Circle':
            chosenShape = new Circle(data.shapeColor, data.letters, data.letterColor);
            break;
        case 'Triangle':
            chosenShape = new Triangle(data.shapeColor, data.letters, data.letterColor);
            break;
        case 'Square':
            chosenShape = new Square(data.shapeColor, data.letters, data.letterColor);
            break;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                ${chosenShape.render()}
                ${chosenShape.renderLetters()}
            </svg>`;
}

function init() {
    inquirer
        .prompt(questions)
        .then((data) => writeToFile('logo.svg', generateSVG(data)))
;}

init();
