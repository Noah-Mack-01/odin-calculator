const solve = require('./index2');

let opOne = {atomic:1}
let opTwo = {atomic:2}
let opThree = {
    operand1:opOne, 
    operand2:opOne, 
    operator:'+'
};

let opFour = {
    operand1:opThree,
    operand2:opTwo,
    operator:'+'
}

let opFive = {
    operand1: opFour,
    operand2: opThree,
    operator: '+'
}

describe("solve addition tests: ", ()=>{
    test("Adds together two operands with atomic values", () => {
        expect(solve(opThree)).toBe(2)})

    test("Adds together one atomic operand, one non-atomic.",
        () => {expect(solve(opFour)).toBe(4)})
    
    test("Adds together two complex operands", () => {
        expect(solve(opFive)).toBe(6);
    })});

