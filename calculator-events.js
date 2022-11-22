const solve = require("./solve"); // arithmetic operations.


module.exports = class calculator {
    /**
     * This constructor will be used when we've solved a prior 
     * equation, only to receive a new operator afterwards.
     * When we press enter, we detach the chain, and so we 
     * need to reattach an atomic value to begin the chain.
     * @param {*} oldVal the priorly solved caluclation.
     * @param {*} operator the operator input we've just put in.
     */
    constructor(oldVal=0, operator="+") {
        this.processed = {atomic:oldVal};
        this.operator = operator;
        this.input = {atomic:0};
    }

    /**
     * Imagine this as us clicking an operator button in the calculator.
     * We need to extend the chain of operations, and as such,
     * consolidate the prior equation, reset our new operator, 
     */
    pusher(operator) {
        let newOperand = {operator:this.operator, operand1:this.processed, operand2:this.input};
        this.processed = {atomic: solve(newOperand)}
        this.input = {};
        this.operator=operator;
    }


    solver() {
        return solve({operator:this.operator, operand1:this.processed, operand2:this.input});
    }



    get result() {
        return this.processed.atomic;
    }
}
