const sumArgs = require('../katas/sum-args.js');

// no arguments => 0
// 1 argument => argument
// 2 arguments => sum of args
// many arguments => sum of args

describe("sumArgs tests", ()=>{
    test("if passed no arguments, should return 0",()=>{
        let expected = 0;
        let actual = sumArgs();
        expect(actual).toBe(expected)
    })
    test("if passed one argument, return that argument",()=>{
        let input = 1;
        let expected = 1;
        let actual = sumArgs(input);
        expect(actual).toBe(expected);
    })
    test("if passed two args, return sum of those args",()=>{
        let expected = 3;
        let actual = sumArgs(1,2);
        expect(actual).toBe(expected);
    })
    test("if passed several args, return sum of those args",()=>{
        let expected = 15;
        let actual = sumArgs(1,2,3,4,5);
        expect(actual).toBe(expected);
    })

})