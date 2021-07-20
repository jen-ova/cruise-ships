/* globals describe it expect */
const Port = require('../src/Port');

describe("constructor", () => {
    let Astapor;
    beforeEach(() => {
        Astapor = new Port("Astapor");
    });

    it("returns an object", () => {
        expect(Astapor).toBeInstanceOf(Port);
    });

    it("checks the port has a name", () => {
        expect(Astapor.portName).toBe("Astapor");
    });
});