const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');

describe("constructor", () => {
    let itinerary;
    beforeEach(() => {
        itinerary = new Itinerary("Daenerys' Crusade");
    });

    it("returns an object", () => {
        expect(itinerary).toBeInstanceOf(Itinerary);
    });

    it("can have ports", () => {
        const qarth = new Port("Qarth");
        const astapor = new Port("Astapor");

        const itinerary = new Itinerary([qarth, astapor]);

        expect(itinerary.ports).toEqual([qarth, astapor]);

    });
});