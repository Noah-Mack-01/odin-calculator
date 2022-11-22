/**
 * REDONE VERSION OF INDEX.JS
 * I wrote too much without commenting and got a little disoriented. 
 * I'm going to reconstruct my code with annotations in this file, then reload it into index.js
 */


/**
 * Lets come up with Mathematical Operations, first.
 */

export default function solve(operand) {
    
    // Operand can be the following struct:
    /**
     * {
     *  atomic: number. solve should fill this value in.
     *  operator: operator is a type of operation, including: '+', '-', '/', '*'. 
     *  operand1: another operand, which the operator will perform its operation on.
     *  operand2: another operand, which the operator will perform its operation on.
     * }
     */

    if ("atomic" in operand) return operand.atomic; 
    switch (operand.operator) {
        case '+':
            return +(solve(operand.operand1) + solve(operand.operand2)).toPrecision(10);
        case '-':
            return +(solve(operand.operand1) - solve(operand.operand2)).toPrecision(10);
        case '/':    
            return +(solve(operand.operand1) / solve(operand.operand2)).toPrecision(10);
        case '*':
            return +(solve(operand.operand1) * solve(operand.operand2)).toPrecision(10);
    }
}