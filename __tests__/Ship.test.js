/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe("Ship", () =>{
    let Titanic;
    beforeEach(() => {
        Titanic = new Ship("Titanic", "Belfast");
    });

    it("can be instantiated", () => {
        expect(Titanic).toBeInstanceOf(Object);
    });

    it("has a starting point", () => {
        expect(Titanic.startingPort).toBe("Belfast");
    });
});