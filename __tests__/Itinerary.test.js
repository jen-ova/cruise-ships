const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');

describe("constructor", () => {
    let qarth, astapor, itinerary;
    beforeEach(() => {
        qarth = new Port("Qarth");
        astapor = new Port("Astapor");
        itinerary = new Itinerary([qarth, astapor]);
    });

    it("returns an object", () => {
        expect(itinerary).toBeInstanceOf(Itinerary);
    });

    it("can have ports", () => {
        expect(itinerary.ports).toEqual([qarth, astapor]);
    });
});