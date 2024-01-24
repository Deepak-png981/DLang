const PrintCommand = require('../commands/PrintCommand');
const ArithmeticCommand = require('../commands/ArithmeticCommand');

class Parser {
    static parse(tokens) {
        if (tokens.includes('jama-ayla')) {
            // Assuming format: [operand1, 'jama-ayla', operand2]
            const [operand1, , operand2] = tokens;
            return new ArithmeticCommand('jama-ayla', operand1, operand2);
        } else if (tokens[0] === 'knock_knock') {
            // It's a print command
            return new PrintCommand(tokens.slice(1).join(' '));
        } else {
            throw new Error(`Unknown command: ${tokens[0]}`);
        }
    }
}

module.exports = Parser;
