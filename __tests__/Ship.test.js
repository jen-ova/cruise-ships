/* globals describe it expect */
const Ship = require('../src/Ship');
const Port = require('../src/Port');

describe("Ship", () => {
    let balerion;
    beforeEach(() => {
        qarth = new Port("Qarth");
        balerion = new Ship("Balerion", qarth);
    });

    it("can be instantiated", () => {
        expect(balerion).toBeInstanceOf(Ship); 
    });

    it("has a starting point", () => {
        expect(balerion.startingPort).toBe(qarth);
    });
});

describe("setSail", () => {
    it("can set sail", () => {
        const qarth = new Port("Qarth");
        const balerion = new Ship("Balerion", qarth);
		balerion.setSail();
		expect(balerion.previousPort).toBe(qarth);
		expect(balerion.currentPort).toBeNull;
    });
});

// ship will sail to Astapor