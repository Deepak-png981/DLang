const CommandInterface = require('./CommandInterface');

class PrintCommand extends CommandInterface {
    constructor(args) {
        super();
        this.args = args;
    }

    execute() {
        if (this.args) {
            console.log(this.args.replace(/"/g, ''));
        } else {
            console.error("No arguments provided for PrintCommand.");
        }
    }
}

module.exports = PrintCommand;
