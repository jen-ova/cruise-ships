/* globals describe it expect */
const Port = require('../src/Port');

describe("constructor", () => {
    let astapor;
    beforeEach(() => {
        astapor = new Port("Astapor");
    });

    it("returns an object", () => {
        expect(astapor).toBeInstanceOf(Port);
    });

    it("checks the port has a name", () => {
        expect(astapor.portName).toBe("Astapor");
    });
});