const solve = require('./solve');

let atomicOne = {atomic:1}
let atomicTwo = {atomic:2}
let addOpOne = {
    operand1:atomicOne, 
    operand2:atomicOne, 
    operator:'+'
};

let addOpTwo = {
    operand1:addOpOne,
    operand2:atomicTwo,
    operator:'+'
}

let addOpThree = {
    operand1: addOpOne,
    operand2: addOpTwo,
    operator: '+'
}

let atomicNegativeOne = {
    atomic: -1
}


let addOpFour = {operand1:atomicNegativeOne, operand2:addOpThree, operator:'+'}

describe("solve addition tests: ", ()=>{
    test("Adds together two operands with atomic values", () => {
        expect(solve(addOpOne)).toBe(2)})

    test("Adds together one atomic operand, one complex",
        () => {expect(solve(addOpTwo)).toBe(4)})
    
    test("Adds together two complex operands", () => {
        expect(solve(addOpThree)).toBe(6)})
    
    test("Adds together a negative number and a positive. Should simulate subtraction", () => {
        expect(solve(addOpFour)).toBe(5)})
    
    });



let atomicFive = {
    atomic: 5
}

let atomicTen = {
    atomic: 10
}


let subtractOpOne = {
    operand1: atomicFive,
    operand2: atomicTen,
    operator: '-'
}

let subtractOpTwo = {
    operand1: subtractOpOne,
    operand2: atomicFive,
    operator: '-'
}

let subtractOpThree = {
    operand1: subtractOpOne,
    operand2: subtractOpTwo,
    operator: '-'
}

let subtractOpFour = {
    operand1: atomicFive,
    operand2: subtractOpThree,
    operator: '-'
}

describe("solve subtraction tests", ()=>{

    test("Subtract atomic operand from another",()=>{
        expect(solve(subtractOpOne)).toBe(-5)
    })

    test("Subtract atomic operand from complex",()=>{
        expect(solve(subtractOpTwo)).toBe(-10)
    })

    test("Subtract complex operand from another",()=>{
        expect(solve(subtractOpThree)).toBe(5)
    })

    test("Subtract complex operand from atomic",()=>{
        expect(solve(subtractOpFour)).toBe(0);
    })
})


let multOpOne = {
    operator: '*',
    operand1: atomicFive,
    operand2: atomicTen
}

let multOpTwo = {
    operator: '*',
    operand1: atomicTwo,
    operand2: multOpOne
}

let multOpThree = {
    operator: '*',
    operand1: multOpOne,
    operand2: multOpTwo
}

let atomicFifth = {
    atomic: .2
}

let multOpFour = {
    operator: '*',
    operand1: multOpThree,
    operand2: atomicFifth
}
describe("solve multiplication tests", ()=>{
    test("Multiply atomic operand by another",()=>{
        expect(solve(multOpOne)).toBe(50);
    })
    test("Multiply atomic operand by complex",()=>{
        expect(solve(multOpTwo)).toBe(100);
    })
    test("Multiply complex operand by another",()=>{
        expect(solve(multOpThree)).toBe(5000);
    })
    test("Multiply operand by atomic fraction, simulating division", ()=>{
        expect(solve(multOpFour)).toBe(1000);
    })

})

let divOpOne = {
    operator: '/',
    operand1: atomicTen,
    operand2: atomicTwo
}

let divOpTwo = {
    operator: '/',
    operand1: atomicTen,
    operand2: divOpOne
}

let divOpThree = {
    operator: '/',
    operand1: divOpOne,
    operand2: divOpTwo
}

let divOpFour = {
    operator: '/',
    operand1: divOpOne,
    operand2: atomicTen
}

let divOpFive = {
    operator: '/',
    operand1: atomicTen,
    operand2: divOpFour
}

describe("solve division tests", ()=>{
    test("Divide atomic operand by another",()=>{
        expect(solve(divOpOne)).toBe(5)
    })

    test("Divide atomic operand by complex",()=>{
        expect(solve(divOpTwo)).toBe(2)
    })

    test("Divide complex operand by another",()=>{
        expect(solve(divOpThree)).toBe(2.5)
    })
    test("Divide complex operand by atomic",()=>{
        expect(solve(divOpFour)).toBe(.5)
    })
    test("Divide number by fraction, simulating multiplication", ()=>{
        expect(solve(divOpFive)).toBe(20)
    })
})