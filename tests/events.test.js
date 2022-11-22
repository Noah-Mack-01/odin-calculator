// const index = require("./events");
import * as index from "./events";

describe("Testing Trunc Decimal.", () => {
    test("Basic Unit Test",()=>{
        expect(index.truncDecimal(10.222, Math.floor)).toBe(10.22);
    });

    test("Testing negative truncation.", ()=>{
        expect(index.truncDecimal(-10.222, Math.ceil)).toBe(-10.22);
    });
    test("Zero Test", ()=>{
        expect(index.truncDecimal(0, Math.floor)).toBe(0);
    });
    test("Integer Test", ()=>{
        expect(index.truncDecimal(101, Math.floor)).toBe(101);
    });


 
describe("Testing Backspace", () => {

    test("Basic Backspace Event on Integer Input", ()=>{
        index.calculator.input.atomic = 101;
        index.onBackSpace();
        expect(index.calculator.input.atomic).toBe(10);
    })});

   
    test("Basic Backspace Event on Negative Integer Input", ()=>{
        index.calculator.input.atomic = -101;
        index.onBackSpace();
        expect(index.calculator.input.atomic).toBe(-10);
    })

    test("Basic Backspace Event on Negative Float Input", ()=>{
        index.calculator.input.atomic = -101.1;
        index.onBackSpace();
        expect(index.calculator.input.atomic).toBe(-101);
    })

    test("Basic Backspace Event on Float Input", ()=>{
        index.calculator.input.atomic = 101.1;
        index.onBackSpace();
        expect(index.calculator.input.atomic).toBe(101);
    })
    

});

describe("Testing onNumber", ()=>{
    test("Basic Integer Entry.", ()=>{
        index.onClear(true);
        expect(index.calculator.input.atomic).toBe(0);
        index.onNumber(2)
        expect(index.calculator.input.atomic).toBe(2);
        index.onNumber(".");
        index.onNumber(2);
        expect(index.calculator.input.atomic).toBe(2.2);
    });

    test("Testing double decimal check.", ()=>{
        index.onNumber(".");
        expect(index.calculator.input.atomic).toBe(2.2);
    });
})

describe("Testing onOperator", ()=>{
    test("Pushing addition, finding new value", ()=>{
        expect(index.calculator.solver()).toBe(2.2);
        index.onOperator('+');
        expect(index.calculator.input.atomic).toBe(0);
        expect(index.calculator.processed.atomic).toBe(2.2);
        expect(index.calculator.solver()).toBe(2.2);
    });

    test("Addition, then subtraction chain, then push mult operator.", ()=>{
        index.onNumber(1);
        index.onNumber(0);
        expect(index.calculator.input.atomic).toBe(10);
        expect(index.calculator.solver()).toBe(12.2);
        index.onOperator('-');
        expect(index.calculator.processed.atomic).toBe(12.2);
        index.onNumber(2);
        expect(index.calculator.solver()).toBe(10.2);
        index.onOperator('*');
        expect(index.calculator.processed.atomic).toBe(10.2);
        expect(index.calculator.operator).toBe('*');
    });

    test("Multiplication to Division Chain", ()=>{
        index.onNumber(4);
        index.onNumber(5);
        expect(index.calculator.input.atomic).toBe(45);
        expect(index.calculator.solver()).toBe(459);
        index.onOperator('/');
        expect(index.calculator.input.atomic).toBe(0);
        expect(index.calculator.solver()).toBe(Infinity);
        expect(index.calculator.processed.atomic).toBe(459);
        index.onNumber(9);
        expect(index.calculator.solver()).toBe(51);
    });
});

describe("Testing onClear", ()=>{
    test("Basic test, clearing past values.", ()=>{
        expect(index.calculator.solver()).toBe(51);
        index.onClear(true);
        expect(index.calculator.operator).toBe('+');
        expect(index.calculator.solver()).toBe(0);
    })
})

