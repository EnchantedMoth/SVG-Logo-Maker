const {Circle, Triangle, Square} = require('./shapes')

describe('Testing shapes', () => {
    //circle test
    describe('circle', () =>{
        it('Testing the creation of a circle', () => {
            const shape = new Circle()
            expect(shape.render()).toEqual(`<circle cx="150" cy="120" r="80" fill="undefined" />`)
        })
    });
    //triangle test
    describe('triangle', () => {
        it('Testing the creation of a triangle', () => {
            const shape = new Triangle()
            expect(shape.render()).toEqual(`<polygon points="150, 1 244, 165 56, 165" fill="undefined" />`)
        })
    });
    //square test
    describe('square', () => {
        it('Testing the creation of a square', () => {
            const shape = new Square()
            expect(shape.render()).toEqual(`<rect x="75" y="35" width="150" height="150" fill="undefined" />`)
        })
    });
})