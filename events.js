import calculator from "./calculator.js";

/**
 * What variables are we pulling over from the old model?
 * Instead of cur_inp, past_inp, operation{}, we just need a calculator.
 * We'll use a boolean to indicate if we're displaying a result, 
 * and a boolean to indicate if we're displaying a negative number.
 */

let calc = new calculator();
let result = false, negative = false;
let dec_place = 0;
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
            else {
                calc.input.atomic = truncDecimal(input, func);
                if (dec_place > 0) dec_place--;
            }
        }
    }
}

function onOperator(operator) {
    calc.pusher(operator);
    dec_place = 0;
}

function onClear(full=false) {
    calc.reset(full);
    dec_place = 0;
}

function onNumber(num) {
    let string = `${calc.input.atomic}`;
    if (dec_place == 0) string+='0';
    if (num == '.') {
        if (dec_place) return;
        dec_place=1; return;
    }
    string=`${+string + (num*Math.pow(1/10,dec_place))}`;
    calc.input.atomic = +string;
    if (dec_place != 0) dec_place++;
}

function truncDecimal(number, func) {
    if (func(number) == number) return number;
    let count = 0;
    while (Math.floor(number * Math.pow(10,count)) != number * Math.pow(10, count)) count++;
    return func(number * Math.pow(10, count - 1)) * Math.pow(10, -count + 1);
}

function onSolve() {
    calc.input.atomic = calc.solver();
    calc.processed = {atomic: 0};
    calc.operator = '+';
}


/** 
module.exports.truncDecimal = truncDecimal;
module.exports.onBackSpace = onBackSpace;
module.exports.onNumber = onNumber;
module.exports.onOperator = onOperator;
module.exports.onClear = onClear;
module.exports.onSolve = onSolve;
module.exports.calculator = calc;
*/
export {truncDecimal, onBackSpace, onNumber, onOperator, onClear, onSolve, calc}