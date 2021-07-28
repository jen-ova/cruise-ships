/* globals describe it expect */
const Ship = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe("Ship", () => {
    let balerion, qarth, itinerary;
    beforeEach(() => {
        qarth = new Port("Qarth");
        itinerary = new Itinerary([qarth]);
        balerion = new Ship("Balerion", itinerary);
    });

    it("can be instantiated", () => {
        expect(balerion).toBeInstanceOf(Ship); 
    });

    it("gets added to port on instantiation", () => {
        expect(qarth.ships).toContain(balerion);
    }); 

    it("has a starting point", () => {
        expect(balerion.currentPort).toBe(qarth);
    });
});

describe("setSail", () => {
    it("can set sail", () => {
        const qarth = new Port("Qarth");
        const astapor = new Port("Astapor");
        const itinerary = new Itinerary([qarth, astapor]);
        const balerion = new Ship("Balerion", itinerary);
        
		balerion.setSail();

		expect(balerion.currentPort).toBeFalsy();
		expect(balerion.previousPort).toBe(qarth);
        expect(qarth.ships).not.toContain(balerion);
    });

    it("can dock at a different port", () => {
        const qarth = new Port("Qarth");
        const astapor = new Port("Astapor");
        const itinerary = new Itinerary([qarth, astapor]);
        const balerion = new Ship("Balerion", itinerary);

        balerion.setSail();
        balerion.dock();

        expect(balerion.currentPort).toBe(astapor);
        expect(astapor.ships).toContain(balerion);
    });

    it("can't set sail further than the last port on the itinerary", () => {
        const qarth = new Port("Qarth");
        const astapor = new Port("Astapor");
        const itinerary = new Itinerary([qarth, astapor]);
        const balerion = new Ship("Balerion", itinerary);

        balerion.setSail();
        balerion.dock();

        expect(() => balerion.setSail()).toThrowError("End of itinerary reached");
    });
});

// ship will sail to Astapor