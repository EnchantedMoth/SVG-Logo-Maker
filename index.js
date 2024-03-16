const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: 'input',
        message: 'Which letters would you like in your logo? (1-3 letters)',
        name: 'letters'
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
]