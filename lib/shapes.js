class Shape{
    constructor(shapeColor, letters, letterColor){
        this.shapeColor = shapeColor,
        this.letters = letters,
        this.letterColor = letterColor
    }


    renderLetters(){
        return `<text x="150" y="125" font-size="55" text-anchor="middle" fill="${this.letterColor}">${this.letters}</text>`
    }

    
};

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="120" r="80" fill="${this.shapeColor}" />`
    }
};

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 1 244, 165 56, 165" fill="${this.shapeColor}" />`
    }
};

class Square extends Shape {
    render() {
        return `<rect x="75" y="35" width="150" height="150" fill="${this.shapeColor}" />`
    }
};

module.exports = {Circle, Triangle, Square}