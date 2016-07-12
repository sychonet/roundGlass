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
};
var value = "(()((())(){))  ";
var inputArray = rl.input.split('\n');
inputArray = inputArray.map(Function.prototype.call, String.prototype.trim);
var noOfInputs = inputArray.shift();
var regexMatch = new RegExp("/^[[]{}()]+$/");
for(var i = 0; i < inputArray.length; i++){
    //console.log(inputArray[i]);
    var bracketsMatched = checkBrackets(inputArray[i]);
    console.log(bracketsMatched == false?"No":bracketsMatched);
}