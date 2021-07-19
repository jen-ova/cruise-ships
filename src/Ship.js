class Ship {
    constructor(name, startingPort) {
        this.shipName = name;
        this.startingPort = startingPort;
    }

    setSail() {
        return `${this.name} has departed from ${this.startingPort}.`

    };
};

module.exports = Ship;