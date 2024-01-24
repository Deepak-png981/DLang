const CommandInterface = require('./CommandInterface');

class ArithmeticCommand extends CommandInterface {
    constructor(operator, operand1, operand2) {
        super();
        this.operator = operator;
        this.operand1 = operand1;
        this.operand2 = operand2;
    }

    execute() {
        switch (this.operator) {
            case 'jama-ayla':
                return console.log(Number(this.operand1) + Number(this.operand2));
            // Add cases for other arithmetic operations if needed
            default:
                throw new Error(`Unknown operator: ${this.operator}`);
        }
    }
}

module.exports = ArithmeticCommand;
