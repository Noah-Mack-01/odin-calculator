const index = require("./events");


describe("Testing Trunc Decimal.", () => {
    test("Basic Unit Test",()=>{
        expect(index.truncDecimal(10.222)).toBe(10.22);
    });
});


