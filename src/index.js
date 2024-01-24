const Tokenizer = require('./tokenizer/Tokenizer');
const Parser = require('./parser/Parser');
const Interpreter = require('./interpreter/Interpreter');

class DLang {
    static run(code) {
        const tokens = Tokenizer.tokenize(code);
        const command = Parser.parse(tokens);
        Interpreter.interpret(command);
    }
}

// Example usage
DLang.run('2 jama-ayla 3'); // Should print 5
// Test print command
DLang.run('knock_knock "Hello World"'); // Should print "Hello World"


