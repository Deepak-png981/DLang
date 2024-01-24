class Tokenizer {
    static tokenize(code) {
        // Improved regex to handle numbers, operators, and strings separately
        return code.match(/"([^"]*)"|[+-]|\d+|jama-ayla|\S+/g);
    }
}

module.exports = Tokenizer;
