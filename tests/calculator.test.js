//const calculator = require("./calculator");
import calculator from "./calculator.js";

describe("Testing Calculator Functionality.",()=>{

    let calc = new calculator();
    calc.input = {atomic:10};

    test("Starting from a blank constructor.",()=>{
        expect(calc.solver()).toBe(10);
    })

    test("Subtracting four from the chain.",()=>{
        calc.pusher("-");
        calc.input.atomic = 4;
        expect(calc.solver()).toBe(6);

    })

    test("Dividing.", ()=>{
        calc.pusher("/");
        calc.input.atomic = 2;
        expect(calc.solver()).toBe(3);
    })

    test("Multiplying.", ()=>{
        calc.pusher('*');
        calc.input.atomic = 10;
        expect(calc.solver()).toBe(30);
    })

})