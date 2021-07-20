class Ship {
    constructor(name, port) {
        this.shipName = name;
        this.startingPort = port;
        this.currentPort = this.startingPort;
        this.previousPort = "";
    }

    setSail() {
        if (this.currentPort === null) {
			return "You are already at sea"
		} else {
			this.previousPort = this.currentPort;
			this.currentPort = null;
			return "Bon Voyage!"
		}
    };

    dock(port) {
        this.currentPort = port;
    }
};

module.exports = Ship;