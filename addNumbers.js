const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
    if (sum === undefined) {
        let sum = 0;
    };
    
    if (numsLeft != 0) {
        reader.question("Please enter a number: ",  function(num) {
            sum+= parseInt(num);
            console.log(sum);
            addNumbers(sum, numsLeft - 1, completionCallback);
        });
    } else {
        completionCallback(sum);
    };
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));





