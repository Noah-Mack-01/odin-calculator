

let calculator = require("./calculator");

/**
 * What variables are we pulling over from the old model?
 * Instead of cur_inp, past_inp, operation{}, we just need a calculator.
 * We'll use a boolean to indicate if we're displaying a result, 
 * and a boolean to indicate if we're displaying a negative number.
 */

let calc = new calculator();
let result = false, negative = false;
let cur_inp = "";

/**
 * What functionality is needed?
 * -> on Enter, on Operator, on Number, on Backspace, on CE events.
 */

function onBackSpace() {
    if (result) {
        onClear(true);
    }
    else {
        // if the current input is a single digit, or just a negative sign, set to blank.
        // (negative && !calc.input.atomic) means if its essentially -0.
        let input = calc.input.atomic;
        let func = (input> 0) ? Math.floor : Math.ceil;
        if ((Math.abs(input) < 10) || (negative && !calc.input.atomic)) {calc.input = {atomic:0}; }
        else {
            // how to remove a digit?
            // if its a whole number, withdraw the first digit.
            // if not, go through new function below.
            if (func(input) == input) calc.input.atomic = func(input / 10);
            else calc.input.atomic = truncDecimal(input, func);
        }
    }
}

function onClear(total=false) {
    if (total) {
        calc = new calculator();
        result = false, negative = false;
    } else {
        result = true; negative = false;
        calc.input.atomic = 0;
    }
}

function onOperator(operator) {
    calc.pusher(operator);
}


function truncDecimal(number, func) {

    if (func(number) == number) return number;

    let count = 0;
    while (Math.floor(number * Math.pow(10,count)) != number * Math.pow(10, count)) count++;
    return func(number * Math.pow(10, count - 1)) * Math.pow(10, -count + 1);
}



module.exports.truncDecimal = truncDecimal;
module.exports.onBackSpace = onBackSpace;
module.exports.calculator = calc;