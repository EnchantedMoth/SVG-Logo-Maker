const {Circle, Triangle, Square} = require('./shapes')

describe('Testing shapes', () => {
    //circle test
    describe('circle', () =>{
        it('Testing the creation of a circle', () => {
            const shape = new Circle('blue')
            expect(shape.render()).toEqual(`<circle cx="150" cy="120" r="80" fill="blue" />`)
        })
    });
    //triangle test
    describe('triangle', () => {
        it('Testing the creation of a triangle', () => {
            const shape = new Triangle('red')
            expect(shape.render()).toEqual(`<polygon points="150, 1 244, 165 56, 165" fill="red" />`)
        })
    });
    //square test
    describe('square', () => {
        it('Testing the creation of a square', () => {
            const shape = new Square('purple')
            expect(shape.render()).toEqual(`<rect x="75" y="35" width="150" height="150" fill="purple" />`)
        })
    });
})