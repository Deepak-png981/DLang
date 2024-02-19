# DLang

DLang is a custom scripting language built for educational purposes. It features a unique syntax and is interpreted using Node.js. 

## Features

- Custom syntax with unique keywords.
- Plugin-based architecture for easy extension.
- Basic arithmetic and print operations.

## Installation

To use DLang, you need to have Node.js installed on your system. Clone the repository and install dependencies (if any):

```bash
git clone <repository-url>
npm install
```
```bash
node src/index.js
```

## Usage

The language currently supports basic print and arithmetic operations. The syntax is as follows:

- `knock_knock`: Used for printing text or results of operations.
- `jama-ayla`: Used as an addition operator.

### Examples

1. Print "Hello World":

   ```bash
   knock_knock "Sundar Duniya"
   ```
2. Perform an addition operation:
    ```bash
    2 jama-ayla 3
    ```

## Extending DLang

DLang is designed to be extensible. You can add new commands by following these steps:

1. Create a new command class in `src/commands/`. Your class should extend `CommandInterface`.

2. Implement the `execute` method for your command.

3. Update `src/parser/Parser.js` to recognize your new command and create an instance of your command class when needed.

## Contributing

Contributions to DLang are welcome! If you have ideas for new features or improvements, feel free to create a pull request or open an issue.

## Developed By

DLang was developed by Deepak Joshi, a passionate software developer with a keen interest in language design and programming education.

- GitHub: [https://github.com/Deepak-png981]
- LinkedIn: [https://www.linkedin.com/in/deepak-joshi-a15b21228]
- Youtube: [https://www.youtube.com/channel/UCCwyvbJ-RYrgH5no0gLGHdQ]



