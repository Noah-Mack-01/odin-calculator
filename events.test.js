const index = require("./events");


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


 
describe("Testing ", () => {

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


