class CommandInterface {
    constructor() {
        if (this.constructor === CommandInterface) {
            throw new Error("Abstract class 'CommandInterface' cannot be instantiated directly.");
        }
    }

    execute(args) {
        throw new Error("You have to implement the method 'execute'!");
    }
}

module.exports = CommandInterface;
