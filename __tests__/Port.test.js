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

describe("adding and removing ships", () => {
    it("can add a ship", () => {
        const qarth = new Port("Qarth");
        const balerion = {};

        qarth.addShip(balerion);

        expect(qarth.ships).toContain(balerion);
    });

    it("can remove a ship", () => {
        const qarth = new Port("Qarth");
        const balerion = {};
        const vhagar = {};
        const meraxes = {};

        qarth.addShip(balerion);
        qarth.addShip(vhagar);
        qarth.addShip(meraxes);
        qarth.removeShip(meraxes);

        expect(qarth.ships).toEqual([balerion, vhagar]);

    })
});