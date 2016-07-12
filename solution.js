var readline = require('readline');
var rl = readline.createInterface({ // To read data
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
var matchingBrackets = {
    '(': ')',
    '[': ']',
    '{': '}'
}; // It is used to match brackets
var inputArray = rl.input.split('\n'); //Get Data line by line and add them to array
inputArray = inputArray.map(Function.prototype.call, String.prototype.trim); // Trim Data of each line
inputArray.shift(); // remove first count
for(var i = 0; i < inputArray.length; i++){
    var bracketsMatched = checkBrackets(inputArray[i]); //function to match brackets and return true or false
    console.log(bracketsMatched);
}
function checkBrackets(inputValue){
    var sequence = [];
    for(var i = 0; i <= inputValue.length; i++){
        if (inputValue[i] === '(' || inputValue[i] === '[' || inputValue[i] === '{') { //If its an open bracket push it to array.
            sequence.push(inputValue[i]);
        } else {
            var lastSequenceCharacter = sequence.pop(); // remove lastly added bracket to match
            if (inputValue[i] !== matchingBrackets[lastSequenceCharacter]) { // match brackets
                return "No";
            }
        }
    }
    return "Yes";
}